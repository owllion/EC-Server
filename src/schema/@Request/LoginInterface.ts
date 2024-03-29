export default{
  "type": "object",
  "properties": {
    "email": {
      "format": "email",
      "type": "string"
    },
    "password": {
      "type": "string"
    }
  },
  "required": [
    "email",
    "password"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}