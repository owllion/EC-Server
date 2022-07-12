export default{
  "type": "object",
  "properties": {
    "productId": {
      "type": "string"
    },
    "productName": {
      "type": "string"
    },
    "image": {
      "type": "array",
      "items": {
        "type": "string"
      }
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
    }
  },
  "required": [
    "availability",
    "brand",
    "category",
    "description",
    "image",
    "price",
    "productId",
    "productName",
    "sale_price",
    "sales",
    "stock"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}