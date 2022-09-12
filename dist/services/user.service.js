import { OAuth2Client } from "google-auth-library";
import config from "config";
import { sendLink } from "../utils/email.js";
import UserModel from "../model/user.model.js";
export const checkIfEmailIsRegisteredWithGoogleLogin = (password) => {
    if (!password) {
        throw new Error("This email is already registered with google login");
    }
};
export const checkIfEmailIsVerified = (verified) => {
    if (!verified)
        throw new Error("Please verify your email!");
};
export const findUser = async ({ field, value, }) => {
    return await UserModel.findOne({ [field]: value });
};
export const createUser = async (info) => {
    const user = new UserModel(info);
    await user.save();
    return user;
};
export const sendVerifyOrResetLink = async ({ user, email, linkType, urlParams, }) => {
    const verifyToken = await user.generateLinkToken();
    const link = `http://localhost:3000/auth/${urlParams}/${verifyToken}`;
    sendLink({ type: linkType, link, email });
};
export const getTokens = async (user) => ({
    token: await user.generateAuthToken(),
    refreshToken: await user.generateRefreshToken(),
});
export const getCartLength = (cartList) => {
    return cartList.reduce((total, cur) => total + cur?.qty, 0);
};
const oAuth2Client = new OAuth2Client(config.get("clientID"), config.get("clientSecret"), "postmessage");
export const getGoogleAuthTokens = async (code) => {
    const { tokens } = await oAuth2Client.getToken(code);
    return tokens;
};
export const verifyIdToken = async (idToken) => {
    return await oAuth2Client.verifyIdToken({
        idToken,
        expectedAudience: config.get("clientID"),
    });
};
export const addItem = (user, product, productId, qtyProps, sizeProps) => {
    const index = user.cartList.findIndex((item) => item._id?.equals(productId) && item.size === sizeProps);
    if (!user.cartList.length || index === -1) {
        product.size = sizeProps;
        product.qty = qtyProps;
        user.cartList.push(product);
        return user;
    }
    else if (user.cartList.length > 0 || index !== -1) {
        user.cartList = user.cartList.map((item, idx) => idx === index
            ? { ...item, qty: item.qty ? item.qty + qtyProps : qtyProps }
            : item);
        return user;
    }
};
export const checkIfProductExistsInFavList = (user, productId) => {
    const res = user.favList.find((item) => item.productId === productId);
    console.log(res);
    if (res)
        throw new Error("Product is already in the list");
};
//# sourceMappingURL=user.service.js.map