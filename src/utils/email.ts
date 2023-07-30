// import nodemailer from "nodemailer";
import { getMailText } from "./getMailText";
import { setTemplate } from "../data/emailTemplate";
import sgMail from "@sendgrid/mail";

export const sendLink = async ({
  type,
  link,
  email,
}: {
  type: string;
  link: string;
  email: string;
}): Promise<void> => {
  const {
    btnText,
    title,
    content,
    type: actionType,
    action,
  } = getMailText(type, link);

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    const msg = {
      to: email,
      from: process.env.MAIL_FROM!,
      subject: title,
      html: setTemplate({
        btnText,
        btnLink: link,
        title,
        content,
        type: actionType,
        action,
      }),
    };
    const info = await sgMail.send(msg);

    console.log("Email send", info);
  } catch (error) {
    console.log("Something went wrong!", error);
  }
};
