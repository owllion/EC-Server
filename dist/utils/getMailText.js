"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMailText = void 0;
const getMailText = (type, link) => {
    const isReset = type === "reset";
    return {
        btnText: isReset ? "Reset Password" : "Verify Email",
        btnLink: link,
        title: isReset ? "Reset Your Password" : "Verify Your Email",
        content: `<h2>Please click on the given link to ${isReset ? "reset your password" : "verify your email"}!</h2>`,
        type,
        action: isReset ? "resetting password" : "email verification",
    };
};
exports.getMailText = getMailText;
//# sourceMappingURL=getMailText.js.map