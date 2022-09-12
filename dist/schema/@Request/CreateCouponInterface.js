"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: "object",
    properties: {
        code: {
            type: "string",
        },
        discountType: {
            type: "string",
        },
        amount: {
            type: "number",
        },
        expiryDate: {
            type: "string",
        },
    },
    required: ["amount", "code", "discountType", "expiryDate"],
    $schema: "http://json-schema.org/draft-07/schema#",
};
//# sourceMappingURL=CreateCouponInterface.js.map