"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.getNormalList = exports.getPopulatedList = exports.userInfoModify = exports.passwordModify = exports.addToFav = exports.removeFromFav = exports.addToCart = exports.updateItemQty = exports.clearCart = exports.removeCartItem = exports.resetPassword = exports.forgotPassword = exports.uploadAvatar = exports.getRefreshToken = exports.logout = exports.checkIfTokenIsValid = exports.verifyUser = exports.checkAccount = exports.sendVerifyOrResetLink = exports.googleLogin = exports.login = exports.register = void 0;
var config_1 = require("config");
var ramda_1 = require("ramda");
var CouponServices = require("../services/coupon.service");
var user_model_1 = require("../model/user.model");
var product_model_1 = require("../model/product.model");
var jwt_1 = require("../utils/jwt");
var UserServices = require("../services/user.service");
//  controller，可以说他是对 http 中 request 的解析，以及对 response 的封装，它对应的是每一个路由，是 http 请求到代码的一个承接，它必须是可单例的，是无状态的。
//controller一般来说有两种，一种是薄Controller，一种是厚Controller。前者Controller只负责搜集参数、调用服务、转发或重定向结果集，其他业务逻辑(例如createUser)都放在Service层。后者则相反，业务逻辑都在Controller中进行处理，服务层只负责一些增删改查的方法。
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, _a, token, refreshToken, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                user = new user_model_1["default"](req.body);
                return [4 /*yield*/, CouponServices.addCouponToUserCouponList("new123", user)];
            case 1:
                _b.sent();
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                return [4 /*yield*/, UserServices.sendVerifyOrResetLink({
                        user: user,
                        email: user.email,
                        linkType: "verify",
                        urlParams: "verify-email"
                    })];
            case 3:
                _b.sent();
                return [4 /*yield*/, UserServices.getTokens(user)];
            case 4:
                _a = _b.sent(), token = _a.token, refreshToken = _a.refreshToken;
                res.status(201).json({
                    msg: "Registration success",
                    result: {
                        token: token,
                        refreshToken: refreshToken,
                        user: {
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            phone: user.phone,
                            cartLength: 0,
                            avatarDefault: user.avatarDefault,
                            avatarUpload: user.avatarUpload
                        }
                    }
                });
                return [3 /*break*/, 6];
            case 5:
                e_1 = _b.sent();
                res.status(500).send({
                    msg: e_1.message
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.register = register;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, _b, token, refreshToken, e_2;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 4, , 5]);
                return [4 /*yield*/, user_model_1["default"].findByCredentials(email, password)];
            case 2:
                user = _c.sent();
                return [4 /*yield*/, UserServices.getTokens(user)];
            case 3:
                _b = _c.sent(), token = _b.token, refreshToken = _b.refreshToken;
                res.status(200).send({
                    msg: "success",
                    result: {
                        token: token,
                        refreshToken: refreshToken,
                        user: {
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            phone: user.phone,
                            cartLength: UserServices.getCartLength(user.cartList),
                            favList: user.favList,
                            avatarDefault: user.avatarDefault,
                            avatarUpload: user.avatarUpload
                        }
                    }
                });
                return [3 /*break*/, 5];
            case 4:
                e_2 = _c.sent();
                res.status(400).send({ msg: e_2.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var googleLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tokens, ticket, _a, name_1, email, picture, locale, user, newUser, _b, token, refreshToken, e_3;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 8, , 9]);
                return [4 /*yield*/, UserServices.getGoogleAuthTokens(req.body.code)];
            case 1:
                tokens = _e.sent();
                return [4 /*yield*/, UserServices.verifyIdToken(tokens.id_token)];
            case 2:
                ticket = _e.sent();
                _a = ticket.getPayload(), name_1 = _a.name, email = _a.email, picture = _a.picture, locale = _a.locale;
                return [4 /*yield*/, UserServices.findUser({ field: "email", value: email })];
            case 3:
                user = _e.sent();
                newUser = void 0;
                if (!!user) return [3 /*break*/, 5];
                return [4 /*yield*/, UserServices.createUser({
                        fullName: name_1,
                        email: email,
                        avatarDefault: picture
                    })];
            case 4:
                newUser = _e.sent();
                return [3 /*break*/, 6];
            case 5:
                if (user && user.password) {
                    throw new Error("This email has already been registered");
                }
                _e.label = 6;
            case 6: return [4 /*yield*/, UserServices.getTokens((user || newUser))];
            case 7:
                _b = _e.sent(), token = _b.token, refreshToken = _b.refreshToken;
                res.status(200).send({
                    msg: "success",
                    result: {
                        token: token,
                        refreshToken: refreshToken,
                        user: {
                            fullName: (user === null || user === void 0 ? void 0 : user.fullName) || name_1,
                            email: email,
                            phone: user === null || user === void 0 ? void 0 : user.phone,
                            avatarDefault: picture,
                            avatarUpload: user === null || user === void 0 ? void 0 : user.avatarUpload,
                            cartLength: UserServices.getCartLength((_c = (user || newUser)) === null || _c === void 0 ? void 0 : _c.cartList),
                            favList: (_d = (user || newUser)) === null || _d === void 0 ? void 0 : _d.favList,
                            locale: locale
                        }
                    }
                });
                return [3 /*break*/, 9];
            case 8:
                e_3 = _e.sent();
                res.status(500).send({ msg: e_3.message });
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.googleLogin = googleLogin;
var sendVerifyOrResetLink = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, UserServices.findUser({
                        field: "email",
                        value: req.body.email
                    })];
            case 1:
                user = _a.sent();
                if (!user)
                    throw new Error("User not found");
                return [4 /*yield*/, UserServices.sendVerifyOrResetLink({
                        user: user,
                        email: req.body.email,
                        linkType: req.body.type,
                        urlParams: req.body.type === "verify" ? "verify-email" : "reset-password/token"
                    })];
            case 2:
                _a.sent();
                res.status(200).send({ msg: "email has been sent successfully" });
                return [3 /*break*/, 4];
            case 3:
                e_4 = _a.sent();
                res.status(500).send({ msg: e_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.sendVerifyOrResetLink = sendVerifyOrResetLink;
var checkAccount = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserServices.findUser({
                        field: "email",
                        value: req.body.email
                    })];
            case 1:
                user = _a.sent();
                if (user) {
                    UserServices.checkIfEmailIsRegisteredWithGoogleLogin(user.password);
                    // UserServices.checkIfEmailIsVerified(user.verified);
                }
                res.status(200).send({
                    hasAccount: user ? true : false
                });
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                res.status(500).send({ msg: e_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.checkAccount = checkAccount;
var verifyUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var decoded, user, _a, token, refreshToken, e_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                decoded = (0, jwt_1.verifyJwt)(req.body.token, config_1["default"].get("linkSecret"));
                return [4 /*yield*/, UserServices.findUser({
                        field: "_id",
                        value: decoded._id
                    })];
            case 1:
                user = _b.sent();
                if (!user)
                    throw new Error("User not found");
                user.verified = true;
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                return [4 /*yield*/, UserServices.getTokens(user)];
            case 3:
                _a = _b.sent(), token = _a.token, refreshToken = _a.refreshToken;
                res.status(200).send({
                    msg: "verified",
                    verified: true,
                    result: {
                        token: token,
                        refreshToken: refreshToken,
                        user: {
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            phone: user.phone,
                            cartLength: UserServices.getCartLength(user.cartList),
                            favList: user.favList,
                            avatarDefault: user.avatarDefault,
                            avatarUpload: user.avatarUpload
                        }
                    }
                });
                return [3 /*break*/, 5];
            case 4:
                e_6 = _b.sent();
                if (e_6.message.includes("expired")) {
                    res.status(401).send({ msg: "token has expired" });
                    return [2 /*return*/];
                }
                res.status(500).send({ msg: e_6.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.verifyUser = verifyUser;
var checkIfTokenIsValid = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            (0, jwt_1.verifyJwt)(req.body.token, config_1["default"].get("linkSecret"));
            res.status(200).send({ isValid: true });
        }
        catch (e) {
            res.status(500).send({ isValid: false });
        }
        return [2 /*return*/];
    });
}); };
exports.checkIfTokenIsValid = checkIfTokenIsValid;
var logout = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                req.user.tokens = req.user.tokens.filter(function (item) { return item.token !== req.token; });
                return [4 /*yield*/, req.user.save()];
            case 1:
                _a.sent();
                res.status(200).send({ msg: "logout!" });
                return [3 /*break*/, 3];
            case 2:
                e_7 = _a.sent();
                res.status(500).send({ msg: e_7.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.logout = logout;
var getRefreshToken = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var refresh, decoded, user, token, refreshToken, e_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                refresh = req.body.refresh;
                decoded = (0, jwt_1.verifyJwt)(refresh, config_1["default"].get("refreshSecret"));
                return [4 /*yield*/, UserServices.findUser({
                        field: "_id",
                        value: decoded._id
                    })];
            case 1:
                user = _a.sent();
                if (!user)
                    throw new Error("User not found");
                return [4 /*yield*/, user.generateAuthToken()];
            case 2:
                token = _a.sent();
                return [4 /*yield*/, user.generateRefreshToken()];
            case 3:
                refreshToken = _a.sent();
                res.status(200).send({
                    msg: "success",
                    token: token,
                    refreshToken: refreshToken
                });
                return [3 /*break*/, 5];
            case 4:
                e_8 = _a.sent();
                if (e_8.message.includes("expired")) {
                    res.status(401).send({ msg: "token has expired" });
                    return [2 /*return*/];
                }
                res.status(400).send({ msg: e_8.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getRefreshToken = getRefreshToken;
var uploadAvatar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var e_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                req.user.avatarUpload = req.body.url;
                return [4 /*yield*/, req.user.save()];
            case 1:
                _a.sent();
                res.status(200).send({ msg: "success" });
                return [3 /*break*/, 3];
            case 2:
                e_9 = _a.sent();
                res.status(500).send({ msg: e_9.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.uploadAvatar = uploadAvatar;
var forgotPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, user, e_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                email = req.body.email;
                return [4 /*yield*/, UserServices.findUser({ field: "email", value: email })];
            case 1:
                user = _a.sent();
                if (!user)
                    throw new Error("No user with that email!");
                return [4 /*yield*/, UserServices.sendVerifyOrResetLink({
                        user: user,
                        email: email,
                        linkType: "reset",
                        urlParams: "reset-password/token"
                    })];
            case 2:
                _a.sent();
                res.status(200).json({
                    message: "email has been sent successfully"
                });
                return [3 /*break*/, 4];
            case 3:
                e_10 = _a.sent();
                res.status(500).send({ msg: e_10.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.forgotPassword = forgotPassword;
var resetPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, password, token, decoded, user, e_11;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, password = _a.password, token = _a.token;
                decoded = (0, jwt_1.verifyJwt)(token, config_1["default"].get("linkSecret"));
                return [4 /*yield*/, UserServices.findUser({
                        field: "_id",
                        value: decoded._id
                    })];
            case 1:
                user = _b.sent();
                if (!user)
                    throw new Error("User not found");
                user.password = password;
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                res.status(200).send({
                    msg: "success"
                });
                return [3 /*break*/, 4];
            case 3:
                e_11 = _b.sent();
                res.status(500).send({ msg: e_11.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.resetPassword = resetPassword;
var removeCartItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var index, e_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                index = req.user.cartList.findIndex(function (item) {
                    return item.productId === req.body.productId && item.size === req.body.size;
                });
                if (index > -1)
                    req.user.cartList = __spreadArray(__spreadArray([], req.user.cartList.slice(0, index), true), req.user.cartList.slice(index + 1), true);
                return [4 /*yield*/, req.user.save()];
            case 1:
                _a.sent();
                res.status(200).send({ msg: "success" });
                return [3 /*break*/, 3];
            case 2:
                e_12 = _a.sent();
                res.status(500).send({ msg: e_12.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.removeCartItem = removeCartItem;
var clearCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var e_13;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                req.user.cartList = [];
                return [4 /*yield*/, req.user.save()];
            case 1:
                _a.sent();
                res.status(200).send({ msg: "success" });
                return [3 /*break*/, 3];
            case 2:
                e_13 = _a.sent();
                res.status(500).send({ msg: e_13.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.clearCart = clearCart;
var updateItemQty = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, productId, type, size, e_14;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, productId = _a.productId, type = _a.type, size = _a.size;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                req.user.cartList = req.user.cartList.map(function (item) {
                    return item.productId === productId && item.size === size
                        ? __assign(__assign({}, item), { qty: type === "inc" ? item.qty + 1 : item.qty - 1 }) : item;
                });
                return [4 /*yield*/, req.user.save()];
            case 2:
                _b.sent();
                res.status(200).send({ msg: "success" });
                return [3 /*break*/, 4];
            case 3:
                e_14 = _b.sent();
                res.status(500).send({ msg: e_14.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateItemQty = updateItemQty;
var addToCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, productId, qty, size, product, user, e_15;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, productId = _a.productId, qty = _a.qty, size = _a.size;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, product_model_1["default"].findOne({ _id: productId })];
            case 2:
                product = _b.sent();
                if (!product)
                    throw new Error("Product not found");
                user = UserServices.addItem(req.user, product, productId, qty, size);
                req.user = user;
                return [4 /*yield*/, req.user.save()];
            case 3:
                _b.sent();
                res.status(200).send({
                    msg: "success",
                    cartList: req.user.cartList
                });
                return [3 /*break*/, 5];
            case 4:
                e_15 = _b.sent();
                res.status(500).send({ msg: e_15.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.addToCart = addToCart;
var removeFromFav = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var e_16;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                req.user.favList = req.user.favList.filter(function (product) {
                    return product.productId !== req.body.productId;
                });
                return [4 /*yield*/, req.user.save()];
            case 1:
                _a.sent();
                res.status(200).send({
                    msg: "success",
                    favList: req.user.favList
                });
                return [3 /*break*/, 3];
            case 2:
                e_16 = _a.sent();
                res.status(500).send({ msg: e_16.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.removeFromFav = removeFromFav;
var addToFav = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, item, e_17;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = req.body.productId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, product_model_1["default"].findOne({ productId: productId })];
            case 2:
                item = _a.sent();
                if (!item)
                    throw new Error("Product not found");
                return [4 /*yield*/, UserServices.checkIfProductExistsInFavList(req.user, productId)];
            case 3:
                _a.sent();
                req.user.favList.push(item);
                return [4 /*yield*/, req.user.save()];
            case 4:
                _a.sent();
                res.status(200).send({
                    msg: "success",
                    favList: req.user.favList
                });
                return [3 /*break*/, 6];
            case 5:
                e_17 = _a.sent();
                res.status(500).send({ msg: e_17.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.addToFav = addToFav;
var passwordModify = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var e_18;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                req.user.password = req.body.password;
                return [4 /*yield*/, req.user.save()];
            case 1:
                _a.sent();
                res.status(200).send({ msg: "update successfully" });
                return [3 /*break*/, 3];
            case 2:
                e_18 = _a.sent();
                res.status(500).send({ msg: e_18.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.passwordModify = passwordModify;
var userInfoModify = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var e_19;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                ["firstName", "lastName", "fullName", "phone"].forEach(function (field) { return (req.user[field] = req.body[field]); });
                return [4 /*yield*/, req.user.save()];
            case 1:
                _a.sent();
                res.status(200).send({
                    msg: "success"
                });
                return [3 /*break*/, 3];
            case 2:
                e_19 = _a.sent();
                res.status(500).send({ msg: e_19.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userInfoModify = userInfoModify;
var getPopulatedList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var type, user, e_20;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                type = req.params.type;
                if (!type || !(0, ramda_1.includes)(type, ["order", "review"]))
                    return [2 /*return*/, res
                            .status(400)
                            .send({ msg: "params must be either order or review" })];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_model_1["default"].findById(req.user.id).populate("".concat(type, "List"))];
            case 2:
                user = _b.sent();
                //If user has not placed any order/review, list will be an empty array added in req.user's document.
                res
                    .status(200)
                    .send((_a = { message: "success" }, _a["".concat(type, "List")] = user === null || user === void 0 ? void 0 : user["".concat(type, "List")], _a));
                return [3 /*break*/, 4];
            case 3:
                e_20 = _b.sent();
                res.status(500).send({ msg: e_20.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getPopulatedList = getPopulatedList;
var getNormalList = function (req, res) {
    var _a;
    var typeList = req.params.type;
    try {
        res
            .status(200)
            .send((_a = { message: "success" }, _a[typeList] = req.user[typeList], _a));
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
exports.getNormalList = getNormalList;
