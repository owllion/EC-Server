export default{
  "type": "object",
  "properties": {
    "image": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "productName": {
      "type": "string"
    },
    "price": {
      "type": "number"
    },
    "sale_price": {
      "type": "number"
    },
    "brand": {
      "type": "string"
    },
    "category": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "stock": {
      "type": "number"
    },
    "availability": {
      "type": "string"
    },
    "sales": {
      "type": "number"
    },
    "productId": {
      "type": "string"
    }
  },
  "required": [
    "productId"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}