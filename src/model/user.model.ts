import {
  modelOptions,
  getModelForClass,
  prop,
  Severity,
  pre,
  DocumentType,
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

  //DocumentType-> methods
  async findByCredentials(
    this: DocumentType<User>,
    email: string,
    password: string
  ) {
    try {
      //   const user = await User.findOne({ email });

      //   if (!user) {
      //     throw new Error("No user with that email!");
      //   }

      const isMatch: boolean = await argon2.verify(password, this.password!);
      if (!isMatch) {
        throw new Error("Incorrect Password ");
      }
      //   return user;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  // JSON.stringify() === toJSON()
  toJSON(this: DocumentType<User>) {
    const user = this;

    const userObject: DocumentType<User> = user.toObject();

    delete userObject.password;
    delete userObject.tokens;

    return userObject;
  }
}

const UserModel = getModelForClass<typeof User>(User);
// getModelForClass -> gets a model for a given class
export default UserModel;
