"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLink = void 0;
const getMailText_1 = require("./getMailText");
const emailTemplate_1 = require("../data/emailTemplate");
const mail_1 = __importDefault(require("@sendgrid/mail"));
const sendLink = ({ type, link, email, }) => __awaiter(void 0, void 0, void 0, function* () {
    const { btnText, title, content, type: actionType, action, } = (0, getMailText_1.getMailText)(type, link);
    try {
        mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: email,
            from: process.env.MAIL_FROM,
            subject: title,
            html: (0, emailTemplate_1.setTemplate)({
                btnText,
                btnLink: link,
                title,
                content,
                type: actionType,
                action,
            }),
        };
        const info = yield mail_1.default.send(msg);
        console.log("Email send", info);
    }
    catch (error) {
        console.log("Something went wrong!", error);
    }
});
exports.sendLink = sendLink;
//# sourceMappingURL=email.js.map