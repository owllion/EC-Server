"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getNormalList = exports.getPopulatedList = exports.userInfoModify = exports.passwordModify = exports.addToFav = exports.removeFromFav = exports.addToCart = exports.updateItemQty = exports.clearCart = exports.removeCartItem = exports.resetPassword = exports.forgotPassword = exports.uploadAvatar = exports.getRefreshToken = exports.logout = exports.checkIfTokenIsValid = exports.verifyUser = exports.checkAccount = exports.sendVerifyOrResetLink = exports.googleLogin = exports.login = exports.register = void 0;
const ramda_1 = require("ramda");
const CouponServices = __importStar(require("../services/coupon.service"));
const user_model_1 = __importDefault(require("../model/user.model"));
const product_model_1 = __importDefault(require("../model/product.model"));
const jwt_1 = require("../utils/jwt");
const UserServices = __importStar(require("../services/user.service"));
const apiMsg_1 = require("../constant/apiMsg");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserServices.findUser({
            field: "email",
            value: req.body.email,
        });
        if (user)
            throw new Error(apiMsg_1.emailAlreadyRegistered);
        const new_user = new user_model_1.default(req.body);
        yield CouponServices.issueCoupons(new_user._id);
        const { token, refreshToken } = yield UserServices.getTokens(new_user);
        res.status(201).json({
            msg: "Registration success",
            result: {
                token,
                refreshToken,
                user: Object.assign(Object.assign({}, new_user.toJSON()), { cartLength: 0 }),
            },
        });
    }
    catch (e) {
        res.status(500).send({
            msg: e.message,
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_model_1.default.findByCredentials(email, password);
        const { token, refreshToken } = yield UserServices.getTokens(user);
        res.status(200).send({
            msg: "success",
            result: {
                token,
                refreshToken,
                user: Object.assign(Object.assign({}, user.toJSON()), { cartLength: UserServices.getCartLength(user.cartList) }),
            },
        });
    }
    catch (e) {
        res.status(400).send({ msg: e.message });
    }
});
exports.login = login;
const googleLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, picture, locale } = yield UserServices.getUserData(req.body.code);
        const user = yield UserServices.findUser({
            field: "email",
            value: email,
        });
        if (user) {
            if (UserServices.isEmailLogin(user.email, user.password)) {
                res.status(400).send(apiMsg_1.emailAlreadyRegistered);
            }
            if (UserServices.isGoogleLogin(user.email, user.password)) {
                res
                    .status(200)
                    .send(UserServices.genUserInfoAndTokens(user, locale, name));
            }
        }
        else {
            const newUser = yield UserServices.createUser({
                fullName: name,
                email: email,
                avatarDefault: picture,
            });
            res
                .status(200)
                .send(UserServices.genUserInfoAndTokens(newUser, locale, name));
        }
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.googleLogin = googleLogin;
const sendVerifyOrResetLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserServices.findUser({
            field: "email",
            value: req.body.email,
        });
        if (!user)
            throw new Error("User not found");
        yield UserServices.sendVerifyOrResetLink({
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
});
exports.sendVerifyOrResetLink = sendVerifyOrResetLink;
const checkAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserServices.findUser({
            field: "email",
            value: req.body.email,
        });
        if (user) {
            UserServices.checkIfEmailIsRegisteredWithGoogleLogin(user.password);
            UserServices.checkIfEmailIsVerified(user.verified);
        }
        res.status(200).send({
            hasAccount: user ? true : false,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.checkAccount = checkAccount;
const verifyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decoded = (0, jwt_1.verifyJwt)(req.body.token, process.env.LINK_SECRET);
        const user = yield UserServices.findUser({
            field: "_id",
            value: decoded._id,
        });
        if (!user)
            throw new Error("User not found");
        user.verified = true;
        yield user.save();
        const { token, refreshToken } = yield UserServices.getTokens(user);
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
});
exports.verifyUser = verifyUser;
const checkIfTokenIsValid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, jwt_1.verifyJwt)(req.body.token, process.env.LINK_SECRET);
        res.status(200).send({ isValid: true });
    }
    catch (e) {
        res.status(500).send({ isValid: false });
    }
});
exports.checkIfTokenIsValid = checkIfTokenIsValid;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.user.tokens = req.user.tokens.filter((item) => item.token !== req.token);
        yield req.user.save();
        res.status(200).send({ msg: "logout!" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.logout = logout;
const getRefreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { refresh } = req.body;
        const decoded = (0, jwt_1.verifyJwt)(refresh, process.env.REFRESH_SECRET);
        const user = yield UserServices.findUser({
            field: "_id",
            value: decoded._id,
        });
        if (!user)
            throw new Error("User not found");
        const token = yield user.generateAuthToken();
        const refreshToken = yield user.generateRefreshToken();
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
});
exports.getRefreshToken = getRefreshToken;
const uploadAvatar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.user.avatarUpload = req.body.url;
        yield req.user.save();
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.uploadAvatar = uploadAvatar;
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const user = yield UserServices.findUser({ field: "email", value: email });
        if (!user)
            throw new Error("No user with that email!");
        yield UserServices.sendVerifyOrResetLink({
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
});
exports.forgotPassword = forgotPassword;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, token } = req.body;
        const decoded = (0, jwt_1.verifyJwt)(token, process.env.LINK_SECRET);
        const user = yield UserServices.findUser({
            field: "_id",
            value: decoded._id,
        });
        if (!user)
            throw new Error("User not found");
        user.password = password;
        yield user.save();
        res.status(200).send({
            msg: "success",
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.resetPassword = resetPassword;
const removeCartItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const index = req.user.cartList.findIndex((item) => item.productId === req.body.productId && item.size === req.body.size);
        if (index > -1)
            req.user.cartList = [
                ...req.user.cartList.slice(0, index),
                ...req.user.cartList.slice(index + 1),
            ];
        yield req.user.save();
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.removeCartItem = removeCartItem;
const clearCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.user.cartList = [];
        yield req.user.save();
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.clearCart = clearCart;
const updateItemQty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, type, size } = req.body;
    try {
        req.user.cartList = req.user.cartList.map((item) => item.productId === productId && item.size === size
            ? Object.assign(Object.assign({}, item), { qty: type === "inc" ? item.qty + 1 : item.qty - 1 }) : item);
        yield req.user.save();
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.updateItemQty = updateItemQty;
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, qty, size } = req.body;
    try {
        const product = yield product_model_1.default.findOne({ _id: productId });
        if (!product)
            throw new Error("Product not found");
        const user = UserServices.addItem(req.user, product, productId, qty, size);
        req.user = user;
        yield req.user.save();
        res.status(200).send({
            msg: "success",
            cartList: req.user.cartList,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.addToCart = addToCart;
const removeFromFav = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.user.favList = req.user.favList.filter((product) => product.productId !== req.body.productId);
        yield req.user.save();
        res.status(200).send({
            msg: "success",
            favList: req.user.favList,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.removeFromFav = removeFromFav;
const addToFav = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.body;
    try {
        const item = yield product_model_1.default.findOne({ productId });
        if (!item)
            throw new Error("Product not found");
        yield UserServices.checkIfProductExistsInFavList(req.user, productId);
        req.user.favList.push(item);
        yield req.user.save();
        res.status(200).send({
            msg: "success",
            favList: req.user.favList,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.addToFav = addToFav;
const passwordModify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.user.password = req.body.password;
        yield req.user.save();
        res.status(200).send({ msg: "update successfully" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.passwordModify = passwordModify;
const userInfoModify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ["firstName", "lastName", "fullName", "phone"].forEach((field) => (req.user[field] = req.body[field]));
        yield req.user.save();
        res.status(200).send({
            msg: "success",
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.userInfoModify = userInfoModify;
const getPopulatedList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.params;
    if (!type || !(0, ramda_1.includes)(type, ["order", "review", "coupon"]))
        return res.status(400).send({ msg: "List does not exist!" });
    try {
        const user = yield user_model_1.default.findById(req.user.id).populate(`${type}List`);
        res
            .status(200)
            .send({ message: "success", [`${type}List`]: user === null || user === void 0 ? void 0 : user[`${type}List`] });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.getPopulatedList = getPopulatedList;
const getNormalList = (req, res) => {
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
exports.getNormalList = getNormalList;
//# sourceMappingURL=user.controller.js.map