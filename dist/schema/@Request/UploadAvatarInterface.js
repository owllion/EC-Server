export default {
    type: "object",
    properties: {
        url: {
            type: "string",
        },
    },
    required: ["url"],
    definitions: {
        Blob: {
            type: "object",
            properties: {
                size: {
                    type: "number",
                },
                type: {
                    type: "string",
                },
            },
            required: ["size", "type"],
        },
    },
    $schema: "http://json-schema.org/draft-07/schema#",
};
//# sourceMappingURL=UploadAvatarInterface.js.map