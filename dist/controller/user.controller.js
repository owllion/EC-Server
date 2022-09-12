import config from "config";
import { includes } from "ramda";
import * as CouponServices from "../services/coupon.service.js";
import UserModel from "../model/user.model.js";
import ProductModel from "../model/product.model.js";
import { verifyJwt } from "../utils/jwt.js";
import * as UserServices from "../services/user.service.js";
export const register = async (req, res) => {
    try {
        const user = new UserModel(req.body);
        await CouponServices.addCouponToUserCouponList("new123", user);
        await user.save();
        await UserServices.sendVerifyOrResetLink({
            user,
            email: user.email,
            linkType: "verify",
            urlParams: "verify-email",
        });
        const { token, refreshToken } = await UserServices.getTokens(user);
        res.status(201).json({
            msg: "Registration success",
            result: {
                token,
                refreshToken,
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                    cartLength: 0,
                    avatarDefault: user.avatarDefault,
                    avatarUpload: user.avatarUpload,
                },
            },
        });
    }
    catch (e) {
        res.status(500).send({
            msg: e.message,
        });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findByCredentials(email, password);
        const { token, refreshToken } = await UserServices.getTokens(user);
        res.status(200).send({
            msg: "success",
            result: {
                token,
                refreshToken,
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                    cartLength: UserServices.getCartLength(user.cartList),
                    favList: user.favList,
                    avatarDefault: user.avatarDefault,
                    avatarUpload: user.avatarUpload,
                },
            },
        });
    }
    catch (e) {
        res.status(400).send({ msg: e.message });
    }
};
export const googleLogin = async (req, res) => {
    try {
        const tokens = await UserServices.getGoogleAuthTokens(req.body.code);
        const ticket = await UserServices.verifyIdToken(tokens.id_token);
        const { name, email, picture, locale } = ticket.getPayload();
        const user = await UserServices.findUser({ field: "email", value: email });
        let newUser;
        if (!user)
            newUser = await UserServices.createUser({
                fullName: name,
                email,
                avatarDefault: picture,
            });
        else if (user && user.password) {
            throw new Error("This email has already been registered");
        }
        const { token, refreshToken } = await UserServices.getTokens((user || newUser));
        res.status(200).send({
            msg: "success",
            result: {
                token,
                refreshToken,
                user: {
                    fullName: user?.fullName || name,
                    email,
                    phone: user?.phone,
                    avatarDefault: picture,
                    avatarUpload: user?.avatarUpload,
                    cartLength: UserServices.getCartLength((user || newUser)?.cartList),
                    favList: (user || newUser)?.favList,
                    locale,
                },
            },
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const sendVerifyOrResetLink = async (req, res) => {
    try {
        const user = await UserServices.findUser({
            field: "email",
            value: req.body.email,
        });
        if (!user)
            throw new Error("User not found");
        await UserServices.sendVerifyOrResetLink({
            user,
            email: req.body.email,
            linkType: req.body.type,
            urlParams: req.body.type === "verify" ? "verify-email" : "reset-password/token",
        });
        res.status(200).send({ msg: "email has been sent successfully" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const checkAccount = async (req, res) => {
    try {
        const user = await UserServices.findUser({
            field: "email",
            value: req.body.email,
        });
        if (user) {
            UserServices.checkIfEmailIsRegisteredWithGoogleLogin(user.password);
        }
        res.status(200).send({
            hasAccount: user ? true : false,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const verifyUser = async (req, res) => {
    try {
        const decoded = verifyJwt(req.body.token, config.get("linkSecret"));
        const user = await UserServices.findUser({
            field: "_id",
            value: decoded._id,
        });
        if (!user)
            throw new Error("User not found");
        user.verified = true;
        await user.save();
        const { token, refreshToken } = await UserServices.getTokens(user);
        res.status(200).send({
            msg: "verified",
            verified: true,
            result: {
                token,
                refreshToken,
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                    cartLength: UserServices.getCartLength(user.cartList),
                    favList: user.favList,
                    avatarDefault: user.avatarDefault,
                    avatarUpload: user.avatarUpload,
                },
            },
        });
    }
    catch (e) {
        if (e.message.includes("expired")) {
            res.status(401).send({ msg: "token has expired" });
            return;
        }
        res.status(500).send({ msg: e.message });
    }
};
export const checkIfTokenIsValid = async (req, res) => {
    try {
        verifyJwt(req.body.token, config.get("linkSecret"));
        res.status(200).send({ isValid: true });
    }
    catch (e) {
        res.status(500).send({ isValid: false });
    }
};
export const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((item) => item.token !== req.token);
        await req.user.save();
        res.status(200).send({ msg: "logout!" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const getRefreshToken = async (req, res) => {
    try {
        const { refresh } = req.body;
        const decoded = verifyJwt(refresh, config.get("refreshSecret"));
        const user = await UserServices.findUser({
            field: "_id",
            value: decoded._id,
        });
        if (!user)
            throw new Error("User not found");
        const token = await user.generateAuthToken();
        const refreshToken = await user.generateRefreshToken();
        res.status(200).send({
            msg: "success",
            token,
            refreshToken,
        });
    }
    catch (e) {
        if (e.message.includes("expired")) {
            res.status(401).send({ msg: "token has expired" });
            return;
        }
        res.status(400).send({ msg: e.message });
    }
};
export const uploadAvatar = async (req, res) => {
    try {
        req.user.avatarUpload = req.body.url;
        await req.user.save();
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await UserServices.findUser({ field: "email", value: email });
        if (!user)
            throw new Error("No user with that email!");
        await UserServices.sendVerifyOrResetLink({
            user,
            email,
            linkType: "reset",
            urlParams: "reset-password/token",
        });
        res.status(200).json({
            message: "email has been sent successfully",
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const resetPassword = async (req, res) => {
    try {
        const { password, token } = req.body;
        const decoded = verifyJwt(token, config.get("linkSecret"));
        const user = await UserServices.findUser({
            field: "_id",
            value: decoded._id,
        });
        if (!user)
            throw new Error("User not found");
        user.password = password;
        await user.save();
        res.status(200).send({
            msg: "success",
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const removeCartItem = async (req, res) => {
    try {
        const index = req.user.cartList.findIndex((item) => item.productId === req.body.productId && item.size === req.body.size);
        if (index > -1)
            req.user.cartList = [
                ...req.user.cartList.slice(0, index),
                ...req.user.cartList.slice(index + 1),
            ];
        await req.user.save();
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const clearCart = async (req, res) => {
    try {
        req.user.cartList = [];
        await req.user.save();
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const updateItemQty = async (req, res) => {
    const { productId, type, size } = req.body;
    try {
        req.user.cartList = req.user.cartList.map((item) => item.productId === productId && item.size === size
            ? {
                ...item,
                qty: type === "inc" ? item.qty + 1 : item.qty - 1,
            }
            : item);
        await req.user.save();
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const addToCart = async (req, res) => {
    const { productId, qty, size } = req.body;
    try {
        const product = await ProductModel.findOne({ _id: productId });
        if (!product)
            throw new Error("Product not found");
        const user = UserServices.addItem(req.user, product, productId, qty, size);
        req.user = user;
        await req.user.save();
        res.status(200).send({
            msg: "success",
            cartList: req.user.cartList,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const removeFromFav = async (req, res) => {
    try {
        req.user.favList = req.user.favList.filter((product) => product.productId !== req.body.productId);
        await req.user.save();
        res.status(200).send({
            msg: "success",
            favList: req.user.favList,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const addToFav = async (req, res) => {
    const { productId } = req.body;
    try {
        const item = await ProductModel.findOne({ productId });
        if (!item)
            throw new Error("Product not found");
        await UserServices.checkIfProductExistsInFavList(req.user, productId);
        req.user.favList.push(item);
        await req.user.save();
        res.status(200).send({
            msg: "success",
            favList: req.user.favList,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const passwordModify = async (req, res) => {
    try {
        req.user.password = req.body.password;
        await req.user.save();
        res.status(200).send({ msg: "update successfully" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const userInfoModify = async (req, res) => {
    try {
        ["firstName", "lastName", "fullName", "phone"].forEach((field) => (req.user[field] = req.body[field]));
        await req.user.save();
        res.status(200).send({
            msg: "success",
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const getPopulatedList = async (req, res) => {
    const { type } = req.params;
    if (!type || !includes(type, ["order", "review"]))
        return res
            .status(400)
            .send({ msg: "params must be either order or review" });
    try {
        const user = await UserModel.findById(req.user.id).populate(`${type}List`);
        res
            .status(200)
            .send({ message: "success", [`${type}List`]: user?.[`${type}List`] });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const getNormalList = (req, res) => {
    const { type: typeList } = req.params;
    try {
        res
            .status(200)
            .send({ message: "success", [typeList]: req.user[typeList] });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
//# sourceMappingURL=user.controller.js.map