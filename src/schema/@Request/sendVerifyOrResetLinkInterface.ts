export default {
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
