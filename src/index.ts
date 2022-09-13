import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";
import dbConnect from "./db/mongoose";
import router from "./routes/index";
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
const port = (Number(process.env.PORT) || 5000) as 5000 | number;

app.get("/", (req, res) => {
  res.send("Hello!");
});

dbConnect();
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is up on the ${port} `);
});
