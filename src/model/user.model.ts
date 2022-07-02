import {
  modelOptions,
  getModelForClass,
  prop,
  Severity,
  pre,
  DocumentType,
  ReturnModelType,
} from "@typegoose/typegoose";

import validator from "validator";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

import { nanoid } from "nanoid";

@pre<User>("save", async function (next) {
  //Arrow Functions cannot be used here, because the binding of this is required to get & modify the document.
  const user = this;

  if (user.isModified("password")) {
    user.password = await argon2.hash(user.password!);
  }

  next();
})
@modelOptions({
  schemaOptions: {
    timestamps: true,
    toObject: {
      transform: function (_, ret) {
        delete ret.password;
        delete ret.tokens;
      },
    },
    // toJSON: {
    //   transform: function (doc, ret) {
    //     delete ret._id;
    //   },
    // },
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
  tokens?: [
    {
      token: string;
    }
  ];

  @prop({ required: true, default: () => nanoid() })
  verificationCode: string;

  @prop()
  passwordResetCode: string | null; //Type mixed

  @prop({ default: false })
  verified: boolean;

  @prop()
  cartList: object[];

  @prop()
  favList: object[];

  public static async findByCredentials(
    this: ReturnModelType<typeof User>,
    email: string,
    password: string
  ): Promise<User | null> {
    try {
      const user = await this.findOne({ email });

      if (!user) {
        throw new Error("No user with that email!");
      }

      const isMatch: boolean = await argon2.verify(password, user.password!);
      if (!isMatch) {
        throw new Error("Incorrect Password ");
      }
      return user;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

const UserModel = getModelForClass(User);

export default UserModel;
