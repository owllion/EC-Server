export default{
  "type": "object",
  "properties": {
    "email": {
      "format": "email",
      "type": "string"
    },
    "token": {
      "type": "string"
    },
    "password": {
      "type": "string"
    }
  },
  "required": [
    "email",
    "password",
    "token"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}