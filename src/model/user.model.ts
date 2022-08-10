import {
  modelOptions,
  getModelForClass,
  prop,
  Severity,
  pre,
  Ref,
  post,
  ReturnModelType,
  DocumentType,
} from "@typegoose/typegoose";
import validator from "validator";
import argon2 from "argon2";
import config from "config";

import OrderModel, { Order } from "../model/order.model";
import ReviewModel, { Review } from "../model/review.model";
import { Product } from "../model/product.model";
import { Coupon } from "../model/coupon.model";
import { signJwt } from "./../utils/jwt";

@pre<User>("save", async function (next) {
  /**
   * Arrow Functions cannot be used here, because the binding of this is required to get & modify the document.
   */
  const user = this;

  if (user.isModified("password")) {
    user.password = await argon2.hash(user.password!);
  }

  next();
})
@pre<User>("remove", async function (next) {
  const user = this;
  await OrderModel.deleteMany({ owner: user._id });
  await ReviewModel.deleteMany({ owner: user._id });
  next();
})
@post<User>("save", function () {
  console.log("this is @post");
})
@modelOptions({
  schemaOptions: {
    timestamps: true,

    toObject: { virtuals: true },
    // toObject: {
    //   transform: function (_, ret) {

    //     delete ret.password;
    //     delete ret.tokens;
    //   },
    // },
    toJSON: {
      virtuals: true,
      transform: function (_, ret) {
        // ret.toObject();
        delete ret.password;
        delete ret.tokens;
      },
    },
  },
  options: {
    /**
     * allow the use and execution of mongoose.Schema.Types.Mixed, if the inferred type cannot be set otherwise
     */
    allowMixed: Severity.ALLOW,
  },
})
export class User {
  @prop({
    lowercase: true,
    required: true,
    unique: true,
    trim: true,
    validate(value: string) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  })
  email: string;

  @prop({ required: true })
  firstName: string;

  @prop({ required: true })
  lastName: string;

  @prop({ default: "", trim: true })
  phone: string | null;

  @prop({ default: "" })
  avatarUpload: string;

  @prop({ default: "https://upload.cc/i1/2021/04/08/yGs8hR.png" })
  avatarDefault: string;

  @prop({
    required: true,
    trim: true,
    minlength: 7,
    validate(value: string) {
      if (value.includes("password")) {
        throw new Error("Password must not contain 'password'.");
      }
    },
  })
  password: string;

  @prop()
  tokens?: { token: string }[];

  @prop({ default: false })
  verified: boolean;

  @prop()
  cartList: DocumentType<Product>[] | [];

  @prop()
  favList: DocumentType<Product>[] | [];

  @prop()
  couponList: DocumentType<Coupon>[] | [];

  @prop({
    ref: "Order",
    foreignField: "owner",
    localField: "_id",
  })
  orderList: Ref<Order>[];

  @prop({
    ref: "Review",
    foreignField: "user",
    localField: "_id",
  })
  reviewList: Ref<Review>[];

  public static async findByCredentials(
    /**
     * static -> model method
     */
    this: ReturnModelType<typeof User>,
    /**
     * this -> refer to whole model
     */
    email: string,
    password: string
  ) {
    const user = await this.findOne({ email });
    if (!user) {
      throw new Error("No user with that email!");
    }

    const isMatch: boolean = await argon2.verify(user.password!, password);
    // argon2.verify("<big long hash>", "password");

    if (!isMatch) {
      throw new Error("Incorrect Password ");
    }
    return user; //instance of UserModel and mongoose.Document
  }

  public async generateAuthToken(this: DocumentType<User>) {
    /**
     *  this -> refer to one document
     */
    const token = signJwt(
      { _id: this._id.toString() },
      config.get<string>("jwtSecret"),
      {
        expiresIn: "1y",
      }
    );
    this.tokens = this.tokens?.concat({ token });

    await this.save();

    return token;
  }
  public async generateRefreshToken(this: DocumentType<User>) {
    const refreshToken = signJwt(
      { _id: this._id.toString() },
      config.get<string>("refreshSecret"),
      {
        expiresIn: "10y",
      }
    );

    return refreshToken;
  }
  /**
   * reset password & verify email link's token
   */
  public async generateLinkToken(this: DocumentType<User>) {
    const linkToken = signJwt(
      { _id: this._id.toString() },
      config.get<string>("linkSecret"),
      {
        expiresIn: "5m",
      }
    );

    return linkToken;
  }
}

const UserModel = getModelForClass(User);

export default UserModel;
