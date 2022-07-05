export default{
  "type": "object",
  "properties": {
    "family": {
      "type": "string",
      "enum": [
        "IPv4"
      ]
    },
    "address": {
      "type": "string"
    },
    "netmask": {
      "type": "string"
    },
    "mac": {
      "type": "string"
    },
    "internal": {
      "type": "boolean"
    },
    "cidr": {
      "type": [
        "null",
        "string"
      ]
    }
  },
  "required": [
    "address",
    "cidr",
    "family",
    "internal",
    "mac",
    "netmask"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}