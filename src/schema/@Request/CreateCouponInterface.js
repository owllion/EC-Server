"use strict";
exports.__esModule = true;
exports["default"] = {
    type: "object",
    properties: {
        code: {
            type: "string"
        },
        discountType: {
            type: "string"
        },
        amount: {
            type: "number"
        },
        expiryDate: {
            type: "string"
        }
    },
    required: ["amount", "code", "discountType", "expiryDate"],
    $schema: "http://json-schema.org/draft-07/schema#"
};
