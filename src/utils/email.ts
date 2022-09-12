import config from "config";
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
      host: config.get<string>("host"),
      port: config.get<number>("mailPort"),
      secure: true,
      auth: {
        user: config.get<string>("mailFrom"),
        pass: config.get<string>("mailPwd"),
      },
    });

    const info = await transporter.sendMail({
      to: email,
      from: config.get<string>("mailFrom"),
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
