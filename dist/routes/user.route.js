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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController = __importStar(require("../controller/user.controller"));
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const validate_middleware_1 = __importDefault(require("../middleware/validate.middleware"));
const validate_params_middleware_1 = __importDefault(require("../middleware/validate.params.middleware"));
const Interface = __importStar(require("../schema/index"));
const GetNormalListInterface_1 = __importDefault(require("../schema/@Request/GetNormalListInterface"));
const router = express_1.default.Router();
router.post("/auth/login", (0, validate_middleware_1.default)(Interface.LoginInterface), UserController.login);
router.post("/auth/google-login", (0, validate_middleware_1.default)(Interface.GoogleLoginInterface), UserController.googleLogin);
router.post("/auth/send-link", (0, validate_middleware_1.default)(Interface.SendVerifyOrResetLinkInterface), UserController.sendVerifyOrResetLink);
router.post("/auth/check-token", (0, validate_middleware_1.default)(Interface.CheckIfTokenIsValidInterface), UserController.checkIfTokenIsValid);
router.post("/auth/check-account", (0, validate_middleware_1.default)(Interface.CheckIfAccountExistsInterface), UserController.checkAccount);
router.post("/auth/verify-user", (0, validate_middleware_1.default)(Interface.VerifyUserInterface), UserController.verifyUser);
router.post("/auth/register", (0, validate_middleware_1.default)(Interface.RegisterInterface), UserController.register);
router.post("/forgot-password", (0, validate_middleware_1.default)(Interface.ForgotPasswordInterface), UserController.forgotPassword);
router.post("/reset-password", (0, validate_middleware_1.default)(Interface.ResetPasswordInterface), UserController.resetPassword);
router.post("/refresh-token", (0, validate_middleware_1.default)(Interface.GetRefreshTokenInterface), UserController.getRefreshToken);
router.get("/logout", auth_middleware_1.default, UserController.logout);
router.post("/user/upload", auth_middleware_1.default, (0, validate_middleware_1.default)(Interface.UploadAvatarInterface), UserController.uploadAvatar);
router.post("/user/cart/remove", auth_middleware_1.default, (0, validate_middleware_1.default)(Interface.RemoveItemFromCartInterface), UserController.removeCartItem);
router.get("/user/cart/clear", auth_middleware_1.default, UserController.clearCart);
router.post("/user/cart/update-qty", auth_middleware_1.default, (0, validate_middleware_1.default)(Interface.UpdateQtyInterface), UserController.updateItemQty);
router.post("/user/cart/add", auth_middleware_1.default, (0, validate_middleware_1.default)(Interface.AddToCartInterface), UserController.addToCart);
router.post("/user/fav/remove", auth_middleware_1.default, (0, validate_middleware_1.default)(Interface.RemoveFromFavInterface), UserController.removeFromFav);
router.post("/user/fav/add", auth_middleware_1.default, (0, validate_middleware_1.default)(Interface.AddToFavInterface), UserController.addToFav);
router.patch("/user/info", auth_middleware_1.default, (0, validate_middleware_1.default)(Interface.UserInfoModifyInterface), UserController.userInfoModify);
router.put("/user/password", auth_middleware_1.default, (0, validate_middleware_1.default)(Interface.UserPasswordModifyInterface), UserController.passwordModify);
router.get("/user/populate/:type/list", auth_middleware_1.default, UserController.getPopulatedList);
router.get("/user/:type/list", auth_middleware_1.default, (0, validate_params_middleware_1.default)(GetNormalListInterface_1.default), UserController.getNormalList);
exports.default = router;
//# sourceMappingURL=user.route.js.map