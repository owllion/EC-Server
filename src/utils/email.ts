import sgMail from "@sendgrid/mail";
import config from "config";

sgMail.setApiKey(config.get<string>("sendgridApiKey"));

export const sendResetPasswordLink = (
  type: string,
  email?: string,
  link?: string,
  code?: string,
  id?: string
) => {
  let subject: string, content: string;

  if (type === "reset") {
    subject = "Reset Password";
    content = `<h2>Please click on the given link to reset your password!</h2>
       <a href="${link}">Click to reset your password!</a>`;
  } else {
    subject = "Verify your email";
    content = `<h2>verification code: ${code}. Id: ${id}</h2>
       `;
  }

  sgMail.send({
    to: email,
    from: config.get<string>("email"),
    subject,
    html: content,
  });
};
