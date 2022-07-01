"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const mongoose_1 = __importDefault(require("./db/mongoose"));
const config_1 = __importDefault(require("config"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use("/api", routes_1.default);
const port = config_1.default.get("port");
app.listen(port, () => {
    console.log(`Server is up on the ${port} `);
    (0, mongoose_1.default)();
});
//# sourceMappingURL=index.js.map