"use strict";
exports.__esModule = true;
var express_1 = require("express");
var UserController = require("../controller/user.controller");
var auth_middleware_1 = require("../middleware/auth.middleware");
var validate_middleware_1 = require("../middleware/validate.middleware");
var validate_params_middleware_1 = require("../middleware/validate.params.middleware");
var Interface = require("../schema/index");
var GetNormalListInterface_1 = require("../schema/@Request/GetNormalListInterface");
var router = express_1["default"].Router();
//public API endpoint
router.post("/auth/login", (0, validate_middleware_1["default"])(Interface.LoginInterface), UserController.login); //ok
router.post("/auth/google-login", (0, validate_middleware_1["default"])(Interface.GoogleLoginInterface), UserController.googleLogin); //ok
router.post("/auth/send-link", (0, validate_middleware_1["default"])(Interface.SendVerifyOrResetLinkInterface), UserController.sendVerifyOrResetLink);
router.post("/auth/check-token", (0, validate_middleware_1["default"])(Interface.CheckIfTokenIsValidInterface), UserController.checkIfTokenIsValid);
router.post("/auth/check-account", (0, validate_middleware_1["default"])(Interface.CheckIfAccountExistsInterface), UserController.checkAccount); //ok
router.post("/auth/verify-user", (0, validate_middleware_1["default"])(Interface.VerifyUserInterface), UserController.verifyUser);
router.post("/auth/register", (0, validate_middleware_1["default"])(Interface.RegisterInterface), UserController.register); //ok
router.post("/forgot-password", (0, validate_middleware_1["default"])(Interface.ForgotPasswordInterface), UserController.forgotPassword); //ok
router.post("/reset-password", (0, validate_middleware_1["default"])(Interface.ResetPasswordInterface), UserController.resetPassword); //ok
router.post("/refresh-token", (0, validate_middleware_1["default"])(Interface.GetRefreshTokenInterface), UserController.getRefreshToken); //ok
//Protected API endpoint
router.get("/logout", auth_middleware_1["default"], UserController.logout); //ok
router.post("/user/upload", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.UploadAvatarInterface), UserController.uploadAvatar);
router.post("/user/cart/remove", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.RemoveItemFromCartInterface), UserController.removeCartItem); //ok
router.get("/user/cart/clear", auth_middleware_1["default"], UserController.clearCart); //ok
router.post("/user/cart/update-qty", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.UpdateQtyInterface), UserController.updateItemQty); //ok
router.post("/user/cart/add", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.AddToCartInterface), UserController.addToCart); //ok
router.post("/user/fav/remove", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.RemoveFromFavInterface), UserController.removeFromFav);
router.post("/user/fav/add", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.AddToFavInterface), UserController.addToFav);
router.patch("/user/info", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.UserInfoModifyInterface), UserController.userInfoModify); //ok
router.put("/user/password", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.UserPasswordModifyInterface), UserController.passwordModify); //ok
router.get("/user/populate/:type/list", auth_middleware_1["default"], UserController.getPopulatedList); //ok
router.get("/user/:type/list", auth_middleware_1["default"], (0, validate_params_middleware_1["default"])(GetNormalListInterface_1["default"]), UserController.getNormalList); //ok
exports["default"] = router;
