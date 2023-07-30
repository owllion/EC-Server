// user
const USER_NOT_FOUND = "user not found";
const USER_ALREADY_EXISTS = "user already exists";

// product
const PRODUCT_NOT_FOUND = "product not found";
const PRODUCT_ALREADY_EXISTS = "product already exists";
const PRODUCT_IS_NOT_AVAILABLE_ERROR = "the product is not available";

// review
const REVIEW_NOT_FOUND = "review not found";

// order
const ORDER_ALREADY_EXISTS = "order already exists";
const ORDER_NOT_FOUND = "order not found";

// order_item
const ORDER_ITEM_NOT_FOUND = "order item not found";

// coupon
const COUPON_NOT_FOUND = "coupon not found";
const COUPON_EXPIRED = "coupon expired";
const MINIMUM_THRESHOLD_NOT_MET = "minimum threshold not met";
const COUPON_ALREADY_EXISTS = "coupon already exists";
const COUPON_ALREADY_USED = "coupon has already been used";

// cart_item
const CART_ITEM_NOT_FOUND = "cart item not found";
const CART_ITEM_QUANTITY_LIMITS_ERROR =
  "cart item quantity should be greater than 1";

// product_item
const PRODUCT_ITEM_ALREADY_EXISTS = "product item already exists";
const PRODUCT_ITEM_NOT_FOUND = "product item not found";

// size
const SIZE_ALREADY_EXISTS = "size already exists";
const SIZE_NOT_FOUND = "size not found";

// auth/token
const ACCOUNT_ALREADY_EXISTS = "account already exist";
const INCORRECT_LOGIN_INPUT = "incorrect email or password";
const EMAIL_ALREADY_REGISTERED_WITH_GOOGLE =
  "this email is already registered with google login";
const EMAIL_ALREADY_REGISTERED_WITH_EMAIL_LOGIN =
  "this email is already registered with email login";
const EMAIL_NOT_VERIFIED = "Please verify your email address";
const MALFORMED_PAYLOAD = "could not validate credentials";
const MALFORMED_TOKEN = "malformed token, please provide a valid token";
const AUTHENTICATION_REQUIRED = "authentication required";
const TOKEN_EXPIRED = "token expired";

// response
const API_RESPONSES = {
  404: { description: "Not found" },
  // 200: { description: "OK" },
  500: { description: "Internal Server Error" },
};

// server
const SERVER_ERROR = "server error, something went wrong.";
