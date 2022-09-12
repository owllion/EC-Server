"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "type": "object",
    "properties": {
        "email": {
            "format": "email",
            "type": "string"
        },
        "firstName": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "password": {
            "type": "string"
        }
    },
    "required": [
        "email",
        "firstName",
        "lastName",
        "password"
    ],
    "$schema": "http://json-schema.org/draft-07/schema#"
};
//# sourceMappingURL=RegisterInterface.js.map