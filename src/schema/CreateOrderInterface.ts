export default {
  type: "object",
  properties: {
    orderId: {
      type: "string",
    },
    order_status: {
      type: "string",
    },
    userId: {
      type: "string",
    },
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    delivery_address: {
      type: "string",
    },
    order_item: {
      type: "array",
      items: {
        $ref: "#/definitions/CreateProductInterface",
      },
    },
    discount: {
      type: "number",
    },
    discount_code: {
      type: "string",
    },
    total_price: {
      type: "number",
    },
    payment_method: {
      type: "string",
    },
  },
  required: [
    "delivery_address",
    "discount",
    "discount_code",
    "email",
    "name",
    "orderId",
    "order_item",
    "order_status",
    "payment_method",
    "total_price",
    "userId",
  ],
  definitions: {
    CreateProductInterface: {
      type: "object",
      properties: {
        productId: {
          type: "string",
        },
        productName: {
          type: "string",
        },
        image: {
          type: "array",
          items: {
            type: "string",
          },
        },
        price: {
          type: "number",
        },
        salePrice: {
          type: "number",
        },
        brand: {
          type: "string",
        },
        category: {
          type: "string",
        },
        description: {
          type: "string",
        },
        stock: {
          type: "number",
        },
        availability: {
          type: "string",
        },
        sales: {
          type: "number",
        },
      },
      required: [
        "availability",
        "brand",
        "category",
        "description",
        "image",
        "price",
        "productId",
        "productName",
        "salePrice",
        "sales",
        "stock",
      ],
    },
  },
  $schema: "http://json-schema.org/draft-07/schema#",
};
