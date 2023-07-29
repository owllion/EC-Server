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
exports.checkIfProductExistsInFavList = exports.addItem = exports.verifyIdToken = exports.setCredentials = exports.getGoogleAuthTokens = exports.getCartLength = exports.getTokens = exports.sendVerifyOrResetLink = exports.createUser = exports.findUser = exports.checkIfEmailIsVerified = exports.checkIfEmailIsRegisteredWithGoogleLogin = void 0;
const google_auth_library_1 = require("google-auth-library");
const email_1 = require("../utils/email");
const user_model_1 = __importDefault(require("../model/user.model"));
const checkIfEmailIsRegisteredWithGoogleLogin = (password) => {
    if (!password) {
        throw new Error("This email is already registered with google login");
    }
};
exports.checkIfEmailIsRegisteredWithGoogleLogin = checkIfEmailIsRegisteredWithGoogleLogin;
const checkIfEmailIsVerified = (verified) => {
    if (!verified)
        throw new Error("Please verify your email!");
};
exports.checkIfEmailIsVerified = checkIfEmailIsVerified;
const findUser = ({ field, value, }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findOne({ [field]: value });
});
exports.findUser = findUser;
const createUser = (info) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_model_1.default(info);
    yield user.save();
    return user;
});
exports.createUser = createUser;
const sendVerifyOrResetLink = ({ user, email, linkType, urlParams, }) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyToken = yield user.generateLinkToken();
    const link = `${process.env.FRONTEND_DEPLOY_URL}/auth/${urlParams}/${verifyToken}`;
    console.log("這是要寄送的link");
    yield (0, email_1.sendLink)({ type: linkType, link, email });
    console.log("這是sendlink之後");
});
exports.sendVerifyOrResetLink = sendVerifyOrResetLink;
const getTokens = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        token: yield user.generateAuthToken(),
        refreshToken: yield user.generateRefreshToken(),
    });
});
exports.getTokens = getTokens;
const getCartLength = (cartList) => {
    return cartList.reduce((total, cur) => total + (cur === null || cur === void 0 ? void 0 : cur.qty), 0);
};
exports.getCartLength = getCartLength;
const oAuth2Client = new google_auth_library_1.OAuth2Client(process.env.CLIENT_ID, process.env.CLIENT_SECRET, "postmessage");
const getGoogleAuthTokens = (code) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(code, code);
        const { tokens } = yield oAuth2Client.getToken(code);
        console.log(tokens);
        return tokens;
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.getGoogleAuthTokens = getGoogleAuthTokens;
const setCredentials = (tokens) => __awaiter(void 0, void 0, void 0, function* () {
    oAuth2Client.setCredentials(tokens);
});
exports.setCredentials = setCredentials;
const verifyIdToken = (idToken) => __awaiter(void 0, void 0, void 0, function* () {
    return yield oAuth2Client.verifyIdToken({
        idToken,
        expectedAudience: process.env.CLIENT_ID,
    });
});
exports.verifyIdToken = verifyIdToken;
const addItem = (user, product, productId, qtyProps, sizeProps) => {
    const index = user.cartList.findIndex((item) => { var _a; return ((_a = item._id) === null || _a === void 0 ? void 0 : _a.equals(productId)) && item.size === sizeProps; });
    if (!user.cartList.length || index === -1) {
        product.size = sizeProps;
        product.qty = qtyProps;
        user.cartList.push(product);
        return user;
    }
    else if (user.cartList.length > 0 || index !== -1) {
        user.cartList = user.cartList.map((item, idx) => idx === index
            ? Object.assign(Object.assign({}, item), { qty: item.qty ? item.qty + qtyProps : qtyProps }) : item);
        return user;
    }
};
exports.addItem = addItem;
const checkIfProductExistsInFavList = (user, productId) => {
    const res = user.favList.find((item) => item.productId === productId);
    console.log(res);
    if (res)
        throw new Error("Product is already in the list");
};
exports.checkIfProductExistsInFavList = checkIfProductExistsInFavList;
//# sourceMappingURL=user.service.js.map