"use strict";
exports.__esModule = true;
exports["default"] = {
    type: "object",
    properties: {
        type: {
            "enum": ["favList", "couponList", "cartList"]
        }
    },
    required: ["type"],
    $schema: "http://json-schema.org/draft-07/schema#"
};
