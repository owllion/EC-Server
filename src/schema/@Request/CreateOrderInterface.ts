export default {
  type: "object",
  properties: {
    orderItem: {
      type: "array",
      items: {
        $ref: "#/definitions/CreateProductInterface",
      },
    },
    deliveryAddress: {
      type: "string",
    },
    total: {
      type: "number",
    },
    discountTotal: {
      type: "number",
    },
    shipping: {
      type: "number",
    },
    receiverName: {
      type: "string",
    },
    discount: {
      type: "number",
    },
    discountCode: {
      type: "string",
    },
    owner: {
      type: "string",
    },
  },
  required: [
    "deliveryAddress",
    "discount",
    "discountCode",
    "orderItem",
    "total",
    "discountTotal",
    "shipping",
    "receiverName",
  ],
  definitions: {
    CreateProductInterface: {
      type: "object",
      properties: {
        productName: {
          type: "string",
        },
        imageList: {
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
          type: "boolean",
        },
        sales: {
          type: "number",
        },
      },
      // required: [
      //   "availability",
      //   "brand",
      //   "category",
      //   "description",
      //   "imageList",
      //   "price",
      //   "productName",
      //   "salePrice",
      //   "sales",
      //   "stock",
      // ],
    },
  },
  $schema: "http://json-schema.org/draft-07/schema#",
};
