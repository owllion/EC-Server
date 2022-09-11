import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
import dbConnect from "./db/mongoose.js";
import config from "config";
import router from "./routes/index.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { notFoundHandler } from "./middleware/not-found.middleware.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use("/api", router);

app.use(errorHandler);
app.use(notFoundHandler);
const port = config.get<number>("port");
// const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is up on the ${port} `);
  dbConnect();
});
