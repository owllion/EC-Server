import {
  modelOptions,
  getModelForClass,
  prop,
  Severity,
  pre,
  post,
  ReturnModelType,
  DocumentType,
} from "@typegoose/typegoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import config from "config";

import OrderModel from "../model/order.model";
import { Product } from "../model/product.model";
import { Coupon } from "../model/coupon.model";

@pre<User>("save", async function (next) {
  //Arrow Functions cannot be used here, because the binding of this is required to get & modify the document.
  const user = this;

  if (user.isModified("password")) {
    user.password = await argon2.hash(user.password!);
  }

  next();
})
@pre<User>("remove", async function (next) {
  const user = this;
  await OrderModel.deleteMany({ owner: user._id });
  next();
})
@post<User>("save", function () {
  console.log("this is @post");
})
@modelOptions({
  schemaOptions: {
    timestamps: true,
    // toObject: {
    //   transform: function (_, ret) {

    //     delete ret.password;
    //     delete ret.tokens;
    //   },
    // },
    toJSON: {
      transform: function (_, ret) {
        ret.toObject();
        delete ret.password;
        delete ret.tokens;
      },
    },
  },
  options: {
    allowMixed: Severity.ALLOW, //allow the use and execution of mongoose.Schema.Types.Mixed, if the inferred type cannot be set otherwise)
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

  @prop()
  avatarUpload: Buffer;

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
  password?: string;

  @prop()
  tokens?: { token: string }[];

  // @prop({ required: true, default: () => nanoid() })
  // verificationCode: string;

  @prop()
  passwordResetCode: string | null; //Type mixed

  @prop({ default: false })
  verified: boolean;

  @prop()
  cartList: Product[];

  @prop()
  favList: Product[];

  @prop()
  couponList: Coupon[];

  public static async findByCredentials(
    //static -> model method
    this: ReturnModelType<typeof User>,
    //this -> refer to whole model
    email: string,
    password: string
  ) {
    try {
      const user = await this.findOne({ email });

      if (!user) {
        throw new Error("No user with that email!");
      }

      const isMatch: boolean = await argon2.verify(user.password!, password);
      // argon2.verify("<big long hash>", "password");
      if (!isMatch) {
        throw new Error("Incorrect Password ");
      }
      return user; //this is instance of UserModel and mongoose.Document
    } catch (e) {
      console.log(e);
      return null!;
    }
  }

  public async generateAuthToken(this: DocumentType<User>) {
    // this -> refer to one document
    const token = jwt.sign(
      { _id: this._id.toString() },
      config.get<string>("privateSecret"),
      {
        expiresIn: "1d",
      }
    );
    this.tokens = this.tokens?.concat({ token });

    await this.save();

    return token;
  }
  public async generateRefreshToken(this: DocumentType<User>) {
    const refreshToken = jwt.sign(
      { _id: this._id.toString() },
      config.get<string>("refreshSecret"),
      {
        expiresIn: "15m",
      }
    );
    // this.tokens = this.tokens?.concat({ token:refreshToken });

    // await this.save();

    return refreshToken;
  }
}

const UserModel = getModelForClass(User);

export default UserModel;
