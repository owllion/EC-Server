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
exports.__esModule = true;
exports.checkIfProductExistsInFavList = exports.addItem = exports.verifyIdToken = exports.getGoogleAuthTokens = exports.getCartLength = exports.getTokens = exports.sendVerifyOrResetLink = exports.createUser = exports.findUser = exports.checkIfEmailIsVerified = exports.checkIfEmailIsRegisteredWithGoogleLogin = void 0;
var google_auth_library_1 = require("google-auth-library");
var config_1 = require("config");
var email_1 = require("../utils/email");
var user_model_1 = require("../model/user.model");
var checkIfEmailIsRegisteredWithGoogleLogin = function (password) {
    // has password -> register with email(false) .
    // no password -> register with google login(true) .
    if (!password) {
        throw new Error("This email is already registered with google login");
    }
};
exports.checkIfEmailIsRegisteredWithGoogleLogin = checkIfEmailIsRegisteredWithGoogleLogin;
var checkIfEmailIsVerified = function (verified) {
    if (!verified)
        throw new Error("Please verify your email!");
};
exports.checkIfEmailIsVerified = checkIfEmailIsVerified;
var findUser = function (_a) {
    var field = _a.field, value = _a.value;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, user_model_1["default"].findOne((_b = {}, _b[field] = value, _b))];
                case 1: return [2 /*return*/, _c.sent()];
            }
        });
    });
};
exports.findUser = findUser;
var createUser = function (info) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = new user_model_1["default"](info);
                return [4 /*yield*/, user.save()];
            case 1:
                _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
exports.createUser = createUser;
var sendVerifyOrResetLink = function (_a) {
    var user = _a.user, email = _a.email, linkType = _a.linkType, urlParams = _a.urlParams;
    return __awaiter(void 0, void 0, void 0, function () {
        var verifyToken, link;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, user.generateLinkToken()];
                case 1:
                    verifyToken = _b.sent();
                    link = "http://localhost:3000/auth/".concat(urlParams, "/").concat(verifyToken);
                    (0, email_1.sendLink)({ type: linkType, link: link, email: email });
                    return [2 /*return*/];
            }
        });
    });
};
exports.sendVerifyOrResetLink = sendVerifyOrResetLink;
var getTokens = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = {};
                return [4 /*yield*/, user.generateAuthToken()];
            case 1:
                _a.token = _b.sent();
                return [4 /*yield*/, user.generateRefreshToken()];
            case 2: return [2 /*return*/, (_a.refreshToken = _b.sent(),
                    _a)];
        }
    });
}); };
exports.getTokens = getTokens;
var getCartLength = function (cartList) {
    return cartList.reduce(function (total, cur) { return total + (cur === null || cur === void 0 ? void 0 : cur.qty); }, 0);
};
exports.getCartLength = getCartLength;
/**
 * Google Login
 */
var oAuth2Client = new google_auth_library_1.OAuth2Client(config_1["default"].get("clientID"), config_1["default"].get("clientSecret"), "postmessage");
var getGoogleAuthTokens = function (code) { return __awaiter(void 0, void 0, void 0, function () {
    var tokens;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, oAuth2Client.getToken(code)];
            case 1:
                tokens = (_a.sent()).tokens;
                return [2 /*return*/, tokens];
        }
    });
}); };
exports.getGoogleAuthTokens = getGoogleAuthTokens;
var verifyIdToken = function (idToken) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, oAuth2Client.verifyIdToken({
                    idToken: idToken,
                    expectedAudience: config_1["default"].get("clientID")
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.verifyIdToken = verifyIdToken;
var addItem = function (user, product, productId, qtyProps, sizeProps) {
    var index = user.cartList.findIndex(function (item) { var _a; return ((_a = item._id) === null || _a === void 0 ? void 0 : _a.equals(productId)) && item.size === sizeProps; });
    if (!user.cartList.length || index === -1) {
        product.size = sizeProps;
        product.qty = qtyProps;
        user.cartList.push(product);
        return user;
    }
    else if (user.cartList.length > 0 || index !== -1) {
        user.cartList = user.cartList.map(function (item, idx) {
            return idx === index
                ? __assign(__assign({}, item), { qty: item.qty ? item.qty + qtyProps : qtyProps }) : item;
        });
        return user;
    }
};
exports.addItem = addItem;
var checkIfProductExistsInFavList = function (user, productId) {
    var res = user.favList.find(function (item) { return item.productId === productId; });
    console.log(res);
    if (res)
        throw new Error("Product is already in the list");
};
exports.checkIfProductExistsInFavList = checkIfProductExistsInFavList;
