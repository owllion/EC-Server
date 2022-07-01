require("dotenv").config();
import dbConnect from "./db/mongoose";
import config from "config";
import morgan from "morgan";
import express from "express";
import cors from "cors";
import router from "./routes";
import helmet from "helmet";

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
