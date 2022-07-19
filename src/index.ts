import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
import express from "express";

import dbConnect from "./db/mongoose";
import config from "config";
import router from "./routes";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use("/api", router);

app.use(errorHandler);
app.use(notFoundHandler);

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

import { signJwt, verifyJwt } from "./utils/jwt";
import jwt from "jsonwebtoken";

const g = () => {
  const token: string = signJwt(
    { email: "test@gmail.com" },
    config.get<string>("jwtSecret"),
    {
      expiresIn: "30s",
    }
  );
  console.log(token);
  return token;
};

const main = (token: string) => {
  try {
    const decoded = verifyJwt<{ _id: string }>(
      token,
      config.get<string>("jwtSecret")
    );

    console.log(decoded);
  } catch (e) {
    console.log(e.message); //TokenExpiredError: jwt expired
    if (e.message.includes("expired")) {
      console.log("hello");
    }
  }
};
// g();
main(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjU4MjE4NTYyLCJleHAiOjE2NTgyMTg1OTJ9.6hBN8BzuY2M8FDZFydNp3K7yJgqd0MlILCsCsj2ORLY"
);
