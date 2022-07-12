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
