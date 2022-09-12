"use strict";
exports.__esModule = true;
exports.getMailText = void 0;
var getMailText = function (type, link) {
    var isReset = type === "reset";
    return {
        btnText: isReset ? "Reset Password" : "Verify Email",
        btnLink: link,
        title: isReset ? "Reset Your Password" : "Verify Your Email",
        content: "<h2>Please click on the given link to ".concat(isReset ? "reset your password" : "verify your email", "!</h2>"),
        type: type,
        action: isReset ? "resetting password" : "email verification"
    };
};
exports.getMailText = getMailText;
