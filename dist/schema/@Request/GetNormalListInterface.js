"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: "object",
    properties: {
        type: {
            enum: ["favList", "couponList", "cartList"],
        },
    },
    required: ["type"],
    $schema: "http://json-schema.org/draft-07/schema#",
};
//# sourceMappingURL=GetNormalListInterface.js.map