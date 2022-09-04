"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("./db/mongoose"));
const config_1 = __importDefault(require("config"));
const routes_1 = __importDefault(require("./routes"));
const error_middleware_1 = require("./middleware/error.middleware");
const not_found_middleware_1 = require("./middleware/not-found.middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use("/api", routes_1.default);
app.use(error_middleware_1.errorHandler);
app.use(not_found_middleware_1.notFoundHandler);
const port = config_1.default.get("port");
app.listen(port, () => {
    console.log(`Server is up on the ${port} `);
    (0, mongoose_1.default)();
});
const user_model_1 = __importDefault(require("./model/user.model"));
const main = () => __awaiter(void 0, void 0, void 0, function* () { return yield user_model_1.default.deleteOne({ _id: "630ae316e3913c5e81522154" }); });
main();
//# sourceMappingURL=index.js.map