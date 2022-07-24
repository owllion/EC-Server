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

app.use(errorHandler);
app.use(notFoundHandler);

const port = config.get<number>("port");

app.get("/", (req, res) => {
  res.send(`Performance example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  res.send(`Ding ding ding! ${process.pid}`);
});

console.log("Running server.js...");
if (cluster.isPrimary) {
  console.log("Master has been started...");
  const NUM_WORKERS = os.cpus().length;
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
} else {
  console.log("Worker process started.");
  app.listen(port);
}

// app.listen(port, () => {
//   console.log(`Server is up on the ${port} `);
//   dbConnect();
// });
