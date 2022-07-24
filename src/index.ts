import express from "express";
import cluster from "cluster";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
import os from "os";
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
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/slow", function (req, res) {
  console.time("slowApi");
  const baseNumber = 7;
  let result = 0;
  for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  }
  console.timeEnd("slowApi");

  console.log(`Result number is ${result} - on process ${process.pid}`);
  res.send(`Result number is ${result}`);
});
app.use(errorHandler);
app.use(notFoundHandler);

const port = config.get<number>("port");

console.log(`Worker ${process.pid} started`);

app.listen(port, () => {
  console.log(`Server is up on the ${port} `);
  dbConnect();
});
