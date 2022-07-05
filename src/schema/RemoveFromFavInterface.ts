export default{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string"
    },
    "favList": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {},
        "additionalProperties": true
      }
    }
  },
  "required": [
    "favList",
    "productId"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}