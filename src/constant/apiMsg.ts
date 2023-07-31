// user
export const userNotFound = "user not found";
export const userAlreadyExists = "user already exists";

// product
export const productNotFound = "product not found";
export const productAlreadyExists = "product already exists";
export const productIsNotAvailableError = "the product is not available";

// review
export const reviewNotFound = "review not found";

// order
export const orderAlreadyExists = "order already exists";
export const orderNotFound = "order not found";

// order_item
export const orderItemNotFound = "order item not found";

// coupon
export const couponNotFound = "coupon not found";
export const couponExpired = "coupon expired";
export const minimumThresholdNotMet = "minimum threshold not met";
export const couponAlreadyExists = "coupon already exists";
export const couponAlreadyUsed = "coupon has already been used";
export const doNotOwnCoupon = "this is not your coupon!";

// cart_item
export const cartItemNotFound = "cart item not found";
export const cartItemQuantityLimitsError =
  "cart item quantity should be greater than 1";

// product_item
export const productItemAlreadyExists = "product item already exists";
export const productItemNotFound = "product item not found";

// size
export const sizeAlreadyExists = "size already exists";
export const sizeNotFound = "size not found";

// auth/token
export const accountAlreadyExists = "account already exist";
export const incorrectLoginInput = "incorrect email or password";
export const emailAlreadyRegisteredWithGoogle =
  "this email is already registered with google login";
export const emailAlreadyRegistered = "this email is already registered";
export const emailNotVerified = "Please verify your email address";
export const malformedPayload = "could not validate credentials";
export const malformedToken = "malformed token, please provide a valid token";
export const authenticationRequired = "authentication required";
export const tokenExpired = "token expired";

// response
export const apiResponses = {
  404: { description: "Not found" },
  // 200: { description: "OK" },
  500: { description: "Internal Server Error" },
};

// server
export const serverError = "server error, something went wrong.";
