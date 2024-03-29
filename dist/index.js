"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("./db/mongoose"));
const index_1 = __importDefault(require("./routes/index"));
const not_found_middleware_1 = require("./middleware/not-found.middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use("/api", index_1.default);
app.use(not_found_middleware_1.notFoundHandler);
console.log(process.env.PORT, "這是prot");
const port = (Number(process.env.PORT) || 5000);
(0, mongoose_1.default)();
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is up on the ${port} `);
});
//# sourceMappingURL=index.js.map