"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: "object",
    properties: {
        email: {
            format: "email",
            type: "string",
        },
        type: {
            type: "string",
        },
    },
    required: ["email", "type"],
    $schema: "http://json-schema.org/draft-07/schema#",
};
//# sourceMappingURL=sendVerifyOrResetLinkInterface.js.map