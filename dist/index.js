"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("./db/mongoose"));
require("dotenv").config();
const config_1 = __importDefault(require("config"));
const express = require("express");
const app = express();
const cors = require("cors");
const port = config_1.default.get("port");
app.use(express.json());
app.use(cors());
app.listen(port, () => {
    console.log(`Server is up on the ${port} `);
    (0, mongoose_1.default)();
});
//# sourceMappingURL=index.js.map