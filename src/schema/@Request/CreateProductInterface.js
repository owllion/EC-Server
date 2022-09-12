"use strict";
exports.__esModule = true;
exports["default"] = {
    type: "object",
    properties: {
        productName: {
            type: "string"
        },
        imageList: {
            type: "array",
            items: {
                type: "string"
            }
        },
        price: {
            type: "number"
        },
        salePrice: {
            type: "number"
        },
        brand: {
            type: "string"
        },
        category: {
            type: "string"
        },
        description: {
            type: "string"
        },
        stock: {
            type: "number"
        },
        availability: {
            type: "boolean"
        },
        sales: {
            type: "number"
        }
    },
    required: [
        "availability",
        "brand",
        "category",
        "description",
        "imageList",
        "price",
        "productName",
        "sales",
        "stock",
    ],
    $schema: "http://json-schema.org/draft-07/schema#"
};
