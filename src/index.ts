import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
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
const port = config.get<number>("port");

app.listen(port, () => {
  console.log(`Server is up on the ${port} `);
  dbConnect();
});

import UserModel from "./model/user.model";

const main = async () =>
  await UserModel.deleteOne({ _id: "630ae316e3913c5e81522154" });
main();
