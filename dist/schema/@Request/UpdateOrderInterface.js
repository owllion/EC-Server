"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "type": "object",
    "properties": {
        "orderItem": {
            "type": "object",
            "properties": {
                "orderId": {
                    "type": "string"
                },
                "deliveryAddress": {
                    "type": "string"
                },
                "orderStatus": {
                    "type": "number"
                }
            },
            "required": [
                "orderId"
            ]
        }
    },
    "required": [
        "orderItem"
    ],
    "$schema": "http://json-schema.org/draft-07/schema#"
};
//# sourceMappingURL=UpdateOrderInterface.js.map