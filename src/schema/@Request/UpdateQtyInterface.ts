export default {
  type: "object",
  properties: {
    productId: {
      type: "string",
    },
    cartList: {
      type: "array",
      items: {
        $ref: "#/definitions/Product",
      },
    },
    qty: {
      type: "number",
    },
  },
  required: ["cartList", "productId", "qty"],
  definitions: {
    Product: {
      type: "object",
      properties: {
        productId: {
          type: "string",
        },
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
        qty: {
          type: "number",
        },
        isChecked: {
          type: "boolean",
        },
      },
      required: [
        "availability",
        "brand",
        "category",
        "imageList",
        "price",
        "productId",
        "productName",
        "sales",
        "stock",
      ],
    },
    "Types.ObjectId": {
      type: "object",
      properties: {
        _id: {
          $ref: "#/definitions/Types.ObjectId",
        },
        _bsontype: {
          type: "string",
          enum: ["ObjectID"],
        },
        id: {
          description: "The ObjectId bytes",
          type: "object",
          additionalProperties: false,
          patternProperties: {
            "^[0-9]+$": {
              type: "number",
            },
          },
        },
        generationTime: {
          description: "The generation time of this ObjectId instance",
          type: "number",
        },
      },
      required: ["_bsontype", "_id", "generationTime", "id"],
    },
    Review: {
      type: "object",
      properties: {
        user: {
          $ref: "#/definitions/Ref<User,Types.ObjectId|undefined>",
          description: "Reference another Model",
        },
        product: {
          description: "Reference another Model",
          anyOf: [
            {
              $ref: "#/definitions/Types.ObjectId",
            },
            {
              $ref: "#/definitions/Product",
            },
          ],
        },
        reviewId: {
          type: "string",
        },
        rating: {
          type: "number",
        },
        comment: {
          type: "string",
        },
      },
      required: ["comment", "rating", "reviewId"],
    },
    User: {
      type: "object",
      properties: {
        email: {
          type: "string",
        },
        firstName: {
          type: "string",
        },
        lastName: {
          type: "string",
        },
        phone: {
          type: "string",
        },
        avatarUpload: {
          type: "object",
          additionalProperties: false,
          patternProperties: {
            "^[0-9]+$": {
              type: "number",
            },
          },
        },
        avatarDefault: {
          type: "string",
        },
        password: {
          type: "string",
        },
        tokens: {
          type: "array",
          items: {
            type: "object",
            properties: {
              token: {
                type: "string",
              },
            },
            required: ["token"],
          },
        },
        verified: {
          type: "boolean",
        },
        cartList: {
          anyOf: [
            {
              type: "array",
              minItems: 0,
              maxItems: 0,
            },
            {
              type: "array",
              items: {
                $ref: "#/definitions/Product",
              },
            },
          ],
        },
        favList: {
          anyOf: [
            {
              type: "array",
              minItems: 0,
              maxItems: 0,
            },
            {
              type: "array",
              items: {
                $ref: "#/definitions/Product",
              },
            },
          ],
        },
        couponList: {
          anyOf: [
            {
              type: "array",
              minItems: 0,
              maxItems: 0,
            },
            {
              type: "array",
              items: {
                $ref: "#/definitions/Coupon",
              },
            },
          ],
        },
        orderList: {
          type: "array",
          items: {
            description: "Reference another Model",
            anyOf: [
              {
                $ref: "#/definitions/Types.ObjectId",
              },
              {
                $ref: "#/definitions/Order",
              },
            ],
          },
        },
        reviewList: {
          type: "array",
          items: {
            $ref: "#/definitions/Ref<Review,Types.ObjectId|undefined>",
          },
        },
      },
      required: [
        "avatarDefault",
        "avatarUpload",
        "cartList",
        "couponList",
        "email",
        "favList",
        "firstName",
        "lastName",
        "orderList",
        "password",
        "phone",
        "reviewList",
        "verified",
      ],
    },
    Coupon: {
      type: "object",
      properties: {
        code: {
          type: "string",
        },
        description: {
          type: "string",
        },
        discountType: {
          type: "string",
        },
        amount: {
          type: "number",
        },
        expiryDate: {
          type: "string",
          format: "date-time",
        },
        minimumAmount: {
          type: "number",
        },
      },
      required: [
        "amount",
        "code",
        "description",
        "discountType",
        "expiryDate",
        "minimumAmount",
      ],
    },
    Order: {
      type: "object",
      properties: {
        orderStatus: {
          type: "number",
        },
        orderId: {
          type: "string",
        },
        owner: {
          $ref: "#/definitions/Ref<User,Types.ObjectId|undefined>",
        },
        deliveryAddress: {
          type: "string",
        },
        orderItem: {
          type: "array",
          items: {
            $ref: "#/definitions/CreateProductInterface",
          },
        },
        discount: {
          type: "number",
        },
        discountCode: {
          type: "string",
        },
        totalPrice: {
          type: "number",
        },
        paymentMethod: {
          type: "string",
        },
        paymentStatus: {
          type: "number",
        },
        paymentDate: {
          type: "string",
          format: "date-time",
        },
      },
      required: [
        "deliveryAddress",
        "orderId",
        "orderItem",
        "orderStatus",
        "paymentDate",
        "paymentMethod",
        "paymentStatus",
        "totalPrice",
      ],
    },
    "Ref<User,Types.ObjectId|undefined>": {
      description: "Reference another Model",
      anyOf: [
        {
          $ref: "#/definitions/Types.ObjectId",
        },
        {
          $ref: "#/definitions/User",
        },
      ],
    },
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
        "imageList",
        "price",
        "productName",
        "salePrice",
        "sales",
        "stock",
      ],
    },
    "Ref<Review,Types.ObjectId|undefined>": {
      description: "Reference another Model",
      anyOf: [
        {
          $ref: "#/definitions/Types.ObjectId",
        },
        {
          $ref: "#/definitions/Review",
        },
      ],
    },
  },
  $schema: "http://json-schema.org/draft-07/schema#",
};
