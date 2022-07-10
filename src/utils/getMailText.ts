import { params } from "../data/emailTemplate";
export const getMailText = (type: string, link?: string): params => {
  if (type === "reset") {
    return {
      btnText: "Reset Password",
      title: "Reset Your Password",
      content: `<h2>Please click on the given link to reset your password!</h2>
           <a href="${link}">Click to reset your password!</a>`,
      type,
      action: "resetting password",
    };
  } else {
    return {
      btnText: "Verify Email",
      title: "Verify Your Email",
      content: `<h2>Please click on the given link to verify your email</h2>`,
      type,
      action: "email verification",
    };
  }
};
