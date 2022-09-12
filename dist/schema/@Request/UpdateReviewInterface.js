"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: "object",
    properties: {
        reviewItem: {
            type: "object",
            properties: {
                reviewId: {
                    type: "string",
                },
                comment: {
                    type: "string",
                },
                rating: {
                    type: "number",
                },
            },
            required: ["reviewId"],
        },
    },
    required: ["reviewItem"],
    $schema: "http://json-schema.org/draft-07/schema#",
};
//# sourceMappingURL=UpdateReviewInterface.js.map