"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const ramda_1 = require("ramda");
const validateParams = (schema) => {
    const ajv = new ajv_1.default({ allErrors: true });
    (0, ajv_formats_1.default)(ajv);
    const validate = ajv.compile(schema);
    return (req, res, next) => {
        var _a;
        const data = req.params;
        if ((0, ramda_1.isEmpty)(data))
            return res.status(400).send({ msg: "Please enter a valid params" });
        const isValid = validate(data);
        if (!isValid) {
            console.log(validate.errors);
            return res.status(400).send({ msg: (_a = validate === null || validate === void 0 ? void 0 : validate.errors) === null || _a === void 0 ? void 0 : _a[0].message });
        }
        next();
    };
};
exports.default = validateParams;
//# sourceMappingURL=validate.params.middleware.js.map