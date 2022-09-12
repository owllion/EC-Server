export default {
    "type": "object",
    "properties": {
        "productItem": {
            "$ref": "#/definitions/IProduct"
        }
    },
    "required": [
        "productItem"
    ],
    "definitions": {
        "IProduct": {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string"
                },
                "productName": {
                    "type": "string"
                },
                "imageList": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "price": {
                    "type": "number"
                },
                "salePrice": {
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
                    "type": "boolean"
                },
                "sales": {
                    "type": "number"
                },
                "isChecked": {
                    "type": "boolean"
                }
            },
            "required": [
                "_id"
            ]
        }
    },
    "$schema": "http://json-schema.org/draft-07/schema#"
};
//# sourceMappingURL=ModifyProductInterface.js.map