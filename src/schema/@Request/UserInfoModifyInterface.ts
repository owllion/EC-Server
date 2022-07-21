export default{
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "phone": {
      "pattern": "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$",
      "type": "string"
    }
  },
  "required": [
    "firstName",
    "lastName",
    "phone"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}