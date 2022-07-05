export default{
  "type": "object",
  "properties": {
    "file": {
      "type": "object",
      "additionalProperties": false,
      "patternProperties": {
        "^[0-9]+$": {
          "type": "number"
        }
      }
    }
  },
  "required": [
    "file"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}