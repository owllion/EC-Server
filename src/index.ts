import dbConnect from "./db/mongoose";

require("dotenv").config();
import config from "config";
const express = require("express");
const app = express();
const cors = require("cors");

const port = config.get("port");

app.use(express.json());
app.use(cors());

// const userRouter = require("../src/routers/user");
// const couponRouter = require("../src/routers/coupon");
// const productRouter = require("../src/routers/product");
// const orderRouter = require("../src/routers/order");
// const gameRouter = require("../src/routers/game");

// app.use("/api", userRouter);
// app.use("/api", couponRouter);
// app.use("/api", productRouter);
// app.use("/api", orderRouter);
// app.use("/api", gameRouter);

app.listen(port, () => {
  console.log(`Server is up on the ${port} `);
  dbConnect();
});
