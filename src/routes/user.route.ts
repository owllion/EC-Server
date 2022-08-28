import { GoogleLoginInterface } from "./../interface/user.interface";
import express from "express";
import * as UserController from "../controller/user.controller";
import auth from "../middleware/auth.middleware";
import validateInput from "../middleware/validate.middleware";
import validateParams from "../middleware/validate.params.middleware";
import * as Interface from "../schema";
import GetNormalListInterface from "../schema/@Request/GetNormalListInterface";

const router = express.Router();

//public API endpoint
router.post(
  "/auth/login",
  validateInput(Interface.LoginInterface),
  UserController.login
); //ok

router.post(
  "/auth/google-login",
  validateInput(Interface.GoogleLoginInterface),
  UserController.googleLogin
); //ok

router.post(
  "/auth/send-verify-link",
  validateInput(Interface.SendVerifyLinkInterface),
  UserController.sendVerifyEmailLink
);
router.post(
  "/auth/check-account",
  validateInput(Interface.CheckIfAccountExistsInterface),
  UserController.checkAccount
); //ok
router.post(
  "/auth/verify-user",
  validateInput(Interface.VerifyUserInterface),
  UserController.verifyUser
);
router.post(
  "/auth/register",
  validateInput(Interface.RegisterInterface),
  UserController.register
); //ok
router.post(
  "/forgot-password",
  validateInput(Interface.ForgotPasswordInterface),
  UserController.forgotPassword
); //ok
router.post(
  "/reset-password",
  validateInput(Interface.ResetPasswordInterface),
  UserController.resetPassword
); //ok
router.post(
  "/refresh-token",
  validateInput(Interface.GetRefreshTokenInterface),
  UserController.getRefreshToken
); //ok

//Protected API endpoint
router.get("/logout", auth, UserController.logout); //ok

router.post(
  "/user/upload",
  auth,
  validateInput(Interface.UploadAvatarInterface),
  UserController.uploadAvatar
);

router.post(
  "/user/cart/remove",
  auth,
  validateInput(Interface.RemoveItemFromCartInterface),
  UserController.removeCartItem
); //ok
router.get("/user/cart/clear", auth, UserController.clearCart); //ok
router.post(
  "/user/cart/update-qty",
  auth,
  validateInput(Interface.UpdateQtyInterface),
  UserController.updateItemQty
); //ok
router.post(
  "/user/cart/add",
  auth,
  validateInput(Interface.AddToCartInterface),
  UserController.addToCart
); //ok

router.post(
  "/user/fav/remove",
  auth,
  validateInput(Interface.RemoveFromFavInterface),
  UserController.removeFromFav
);
router.post(
  "/user/fav/add",
  auth,
  validateInput(Interface.AddToFavInterface),
  UserController.addToFav
);

router.patch(
  "/user/info",
  auth,
  validateInput(Interface.UserInfoModifyInterface),
  UserController.userInfoModify
); //ok
router.put(
  "/user/password",
  auth,
  validateInput(Interface.UserPasswordModifyInterface),
  UserController.passwordModify
); //ok
router.get("/user/populate/:type/list", auth, UserController.getPopulatedList); //ok
router.get(
  "/user/:type/list",
  auth,
  validateParams(GetNormalListInterface),
  UserController.getNormalList
); //ok

export default router;
