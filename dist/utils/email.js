import config from "config";
import nodemailer from "nodemailer";
import { getMailText } from "./getMailText.js";
import { setTemplate } from "../data/emailTemplate.js";
export const sendLink = async ({ type, link, email, }) => {
    const { btnText, title, content, type: actionType, action, } = getMailText(type, link);
    try {
        let transporter = nodemailer.createTransport({
            host: config.get("host"),
            port: config.get("mailPort"),
            secure: true,
            auth: {
                user: config.get("mailFrom"),
                pass: config.get("mailPwd"),
            },
        });
        const info = await transporter.sendMail({
            to: email,
            from: config.get("mailFrom"),
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
    }
    catch (error) {
        console.log("Something went wrong!", error);
    }
};
//# sourceMappingURL=email.js.map