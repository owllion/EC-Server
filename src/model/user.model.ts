import {
  modelOptions,
  getModelForClass,
  prop,
  Severity,
  pre,
  post,
  Ref,
  ReturnModelType,
  DocumentType,
} from "@typegoose/typegoose";
import { nanoid } from "nanoid";

import validator from "validator";
import argon2 from "argon2";

import OrderModel, { Order } from "../model/order.model";
import ReviewModel, { Review } from "../model/review.model";
import { Product } from "../model/product.model";
import { signJwt } from "./../utils/jwt";
import UserCouponModel, { UserCoupon } from "./userCoupon.model";

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
@pre<User>("deleteOne", async function (next) {
  const id = this.getFilter()["_id"];
  await OrderModel.deleteMany({ owner: id });
  await ReviewModel.deleteMany({ user: id });
  await UserCouponModel.deleteMany({ user: id });
  next();
})
@post<User>("save", function () {
  console.log("after save");
})
@modelOptions({
  schemaOptions: {
    timestamps: true,
    toObject: { virtuals: true },
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

  @prop({ required: true, default: () => nanoid() })
  userId: string;

  @prop({ trim: true })
  firstName: string;

  @prop({ trim: true })
  lastName: string;

  @prop({ default: "", trim: true })
  fullName: string;

  @prop({ default: "" })
  phone: string | null;

  @prop({ default: "" })
  avatarUpload: string;

  @prop({
    default:
      "https://res.cloudinary.com/azainseong/image/upload/v1662517415/mij3ogxe5cqxitevri9z.png",
  })
  avatarDefault: string;

  @prop({
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

  // @prop()
  // couponList: DocumentType<Coupon>[] | [];

  @prop({
    ref: "UserCoupon", //collection name
    foreignField: "user", //該colleciton裡面要關聯的欄位
    localField: "_id", //對方要和此collection關聯的目標欄位
  })
  couponList: Ref<UserCoupon>[];

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
    const isMatch: boolean = await argon2.verify(
      user.password!,
      password.trim()
    );
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
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d",
      }
    );
    this.tokens = this.tokens?.concat({ token });

    await this.save();

    return token;
  }
  public async generateRefreshToken(this: DocumentType<User>) {
    const refreshToken = signJwt(
      { _id: this._id.toString() },
      process.env.REFRESH_SECRET!,
      {
        expiresIn: "1y",
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
      process.env.LINK_SECRET!,
      {
        expiresIn: "1d",
      }
    );

    return linkToken;
  }
}

const UserModel = getModelForClass(User);

export default UserModel;
