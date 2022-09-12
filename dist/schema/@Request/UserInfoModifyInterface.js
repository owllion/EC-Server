export default {
    type: "object",
    properties: {
        firstName: {
            type: "string",
        },
        lastName: {
            type: "string",
        },
        fullName: {
            type: "string",
        },
        phone: {
            anyOf: [
                {
                    pattern: "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$",
                    type: "string",
                },
                {
                    type: "null",
                },
            ],
        },
    },
    required: ["firstName" || "lastName" || "fullName"],
    $schema: "http://json-schema.org/draft-07/schema#",
};
//# sourceMappingURL=UserInfoModifyInterface.js.map