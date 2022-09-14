import nodemailer from "nodemailer";
import { getMailText } from "./getMailText";
import { setTemplate } from "../data/emailTemplate";

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
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_FROM!,
        pass: process.env.MAIL_PWD!,
      },
    });

    const info = await transporter.sendMail({
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
    });

    console.log("Email send", info);
  } catch (error) {
    console.log("Something went wrong!", error);
  }
};
