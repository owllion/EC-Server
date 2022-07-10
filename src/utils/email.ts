import sgMail from "@sendgrid/mail";
import config from "config";
import { getMailText } from "./getMailText";
import { setTemplate } from "../data/emailTemplate.js";

sgMail.setApiKey(config.get<string>("sendgridApiKey"));

export const sendResetPasswordLink = (
  type: string,
  email?: string,
  link?: string
) => {
  const {
    btnText,
    title,
    content,
    type: actionType,
    action,
  } = getMailText(type, link);

  sgMail.send({
    to: email,
    from: "no-reply@mail.com",
    subject: title,
    html: setTemplate({
      btnText,
      title,
      content,
      type: actionType,
      action,
    }),
  });
};
