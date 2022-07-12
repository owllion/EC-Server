export default{
  "type": "object",
  "properties": {
    "productUpdate": {
      "type": "object",
      "properties": {
        "productId": {
          "type": "string"
        }
      },
      "required": [
        "productId"
      ]
    }
  },
  "required": [
    "productUpdate"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}