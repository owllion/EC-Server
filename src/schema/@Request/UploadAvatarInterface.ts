export default{
  "type": "object",
  "properties": {
    "file": {
      "anyOf": [
        {
          "$ref": "#/definitions/Blob"
        },
        {
          "type": "object",
          "additionalProperties": false,
          "patternProperties": {
            "^[0-9]+$": {
              "type": "number"
            }
          }
        },
        {
          "type": "string"
        }
      ]
    }
  },
  "required": [
    "file"
  ],
  "definitions": {
    "Blob": {
      "type": "object",
      "properties": {
        "size": {
          "type": "number"
        },
        "type": {
          "type": "string"
        }
      },
      "required": [
        "size",
        "type"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#"
}