import dbConnect from "./db/mongoose";
import config from "config";
import morgan from "morgan";
import express from "express";
import cors from "cors";
import router from "./routes";
import "dotenv/config";
import helmet from "helmet";
import mongoose from "mongoose";

import { DocumentType } from "@typegoose/typegoose";
import { User } from "./model/user.model";
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use("/api", router);

const port = config.get("port");

app.listen(port, () => {
  console.log(`Server is up on the ${port} `);
  dbConnect();
});

// import { sendLink } from "./utils/email";

// sendLink({
//   type: "verify",
//   link: "https://stackoverflow.com/questions/12736269/how-to-declare-return-types-for-functions-in-typescript",
//   email: "defrag55345@gmail.com",
// });

import UserModel from "./model/user.model";
// import { isDocument } from "@typegoose/typegoose";
const test = async () => {
  const res = await UserModel.findOne({ email: "test@example.com" });
  console.log(res, "幹，加了await");
  console.log(
    "UserModel.findOne 是否為document",
    res instanceof mongoose.Document
  );

  // console.log(res, "UserModel.findOne 卻不是instance??");
  // console.log(Object.keys(res), "這是find email為test的結果");
  // console.log(isDocument(res), "這個findOne是不是UserMode的document呢?"); //false，既不是doc也不是實體，所以任何method都不能使用喔!

  // console.log(res instanceof UserModel, "res是否為usermodel的實體"); //false
  // console.log(res, "this is res");
  try {
    // const u = new UserModel({
    //   firstName: "test2",
    //   lastName: "lastTxk",
    //   email: "test@example.com",
    //   password: "testSecret",
    // });
    // const token = await u.generateAuthToken();
    // console.log({ token });
    // console.log({ u });
    // console.log(u instanceof UserModel);

    // const user = await UserModel.findOne({ email: "poiuyt@gmail.com" });
    // console.log(user, "this is user!!!!!!!!!!!!!!!");
    // console.log(user instanceof UserModel); //false

    const creUser = await UserModel.findByCredentials(
      "test@example.com",
      "testSecret"
    );
    console.log(creUser instanceof UserModel); //true
    // console.log(creUser, "creUser..................");
    let token, refreshToken;
    if (creUser) {
      token = await creUser.generateAuthToken();
      refreshToken = await creUser.generateRefreshToken();
    }
    console.log(token);
    console.log(refreshToken);
  } catch (error) {
    console.log(error);
  }
};
test();
