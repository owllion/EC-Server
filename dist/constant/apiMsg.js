"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.apiResponses = exports.tokenExpired = exports.authenticationRequired = exports.malformedToken = exports.malformedPayload = exports.emailNotVerified = exports.emailAlreadyRegistered = exports.emailAlreadyRegisteredWithGoogle = exports.incorrectLoginInput = exports.accountAlreadyExists = exports.sizeNotFound = exports.sizeAlreadyExists = exports.productItemNotFound = exports.productItemAlreadyExists = exports.cartItemQuantityLimitsError = exports.cartItemNotFound = exports.couponAlreadyUsed = exports.couponAlreadyExists = exports.minimumThresholdNotMet = exports.couponExpired = exports.couponNotFound = exports.orderItemNotFound = exports.orderNotFound = exports.orderAlreadyExists = exports.reviewNotFound = exports.productIsNotAvailableError = exports.productAlreadyExists = exports.productNotFound = exports.userAlreadyExists = exports.userNotFound = void 0;
exports.userNotFound = "user not found";
exports.userAlreadyExists = "user already exists";
exports.productNotFound = "product not found";
exports.productAlreadyExists = "product already exists";
exports.productIsNotAvailableError = "the product is not available";
exports.reviewNotFound = "review not found";
exports.orderAlreadyExists = "order already exists";
exports.orderNotFound = "order not found";
exports.orderItemNotFound = "order item not found";
exports.couponNotFound = "coupon not found";
exports.couponExpired = "coupon expired";
exports.minimumThresholdNotMet = "minimum threshold not met";
exports.couponAlreadyExists = "coupon already exists";
exports.couponAlreadyUsed = "coupon has already been used";
exports.cartItemNotFound = "cart item not found";
exports.cartItemQuantityLimitsError = "cart item quantity should be greater than 1";
exports.productItemAlreadyExists = "product item already exists";
exports.productItemNotFound = "product item not found";
exports.sizeAlreadyExists = "size already exists";
exports.sizeNotFound = "size not found";
exports.accountAlreadyExists = "account already exist";
exports.incorrectLoginInput = "incorrect email or password";
exports.emailAlreadyRegisteredWithGoogle = "this email is already registered with google login";
exports.emailAlreadyRegistered = "this email is already registered";
exports.emailNotVerified = "Please verify your email address";
exports.malformedPayload = "could not validate credentials";
exports.malformedToken = "malformed token, please provide a valid token";
exports.authenticationRequired = "authentication required";
exports.tokenExpired = "token expired";
exports.apiResponses = {
    404: { description: "Not found" },
    500: { description: "Internal Server Error" },
};
exports.serverError = "server error, something went wrong.";
//# sourceMappingURL=apiMsg.js.map