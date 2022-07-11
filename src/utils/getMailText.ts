import { params } from "../data/emailTemplate";

export const getMailText = (type: string, link: string): params => {
  const isReset = type === "reset";

  return {
    btnText: isReset
      ? `<a href="${link}">Reset Password</a>`
      : `<a href="${link}">Verify Email</a>`,
    title: isReset ? "Reset Your Password" : "Verify Your Email",
    content: `<h2>Please click on the given link to ${
      isReset ? "reset your password" : "verify your email"
    }!</h2>`,
    type,
    action: "resetting password",
  };
};
