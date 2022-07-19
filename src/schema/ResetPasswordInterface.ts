export default {
  type: "object",
  properties: {
    token: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
  required: ["password", "token"],
  $schema: "http://json-schema.org/draft-07/schema#",
};
