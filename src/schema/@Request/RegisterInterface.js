"use strict";
exports.__esModule = true;
exports["default"] = {
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
