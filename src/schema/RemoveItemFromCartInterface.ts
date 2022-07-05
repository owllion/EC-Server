export default{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string"
    },
    "cartList": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {},
        "additionalProperties": true
      }
    }
  },
  "required": [
    "cartList",
    "productId"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}