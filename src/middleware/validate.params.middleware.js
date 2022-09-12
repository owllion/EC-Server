"use strict";
exports.__esModule = true;
var ajv_1 = require("ajv");
var ajv_formats_1 = require("ajv-formats");
var ramda_1 = require("ramda");
var validateParams = function (schema) {
    var ajv = new ajv_1["default"]({ allErrors: true });
    (0, ajv_formats_1["default"])(ajv);
    var validate = ajv.compile(schema);
    return function (req, res, next) {
        var _a;
        var data = req.params;
        if ((0, ramda_1.isEmpty)(data))
            return res.status(400).send({ msg: "Please enter a valid params" });
        var isValid = validate(data);
        if (!isValid) {
            console.log(validate.errors);
            return res.status(400).send({ msg: (_a = validate === null || validate === void 0 ? void 0 : validate.errors) === null || _a === void 0 ? void 0 : _a[0].message });
        }
        next();
    };
};
exports["default"] = validateParams;
