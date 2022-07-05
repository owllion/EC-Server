export default{
  "anyOf": [
    {
      "$ref": "#/definitions/NetworkInterfaceInfoIPv4"
    },
    {
      "$ref": "#/definitions/NetworkInterfaceInfoIPv6"
    }
  ],
  "definitions": {
    "NetworkInterfaceInfoIPv4": {
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
      ]
    },
    "NetworkInterfaceInfoIPv6": {
      "type": "object",
      "properties": {
        "family": {
          "type": "string",
          "enum": [
            "IPv6"
          ]
        },
        "scopeid": {
          "type": "number"
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
        "netmask",
        "scopeid"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#"
}