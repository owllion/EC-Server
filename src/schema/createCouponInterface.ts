export default{
  "type": "object",
  "properties": {
    "code": {
      "type": "string"
    },
    "discountType": {
      "type": "string"
    },
    "amount": {
      "type": "number"
    },
    "expiryDate": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "amount",
    "code",
    "discountType",
    "expiryDate"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}