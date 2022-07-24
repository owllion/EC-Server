import express from "express";
import * as UserController from "../controller/user.controller";
import auth from "../middleware/auth.middleware";
import validateInput from "../middleware/validate.middleware";
import * as Interface from "../schema";

const router = express.Router();

//public API endpoint
router.post(
  "/login",
  validateInput(Interface.LoginInterface),
  UserController.login
); //ok
router.post(
  "/register",
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
  UserController.uploadImg
);

router.post(
  "/user/cart/remove",
  auth,
  validateInput(Interface.RemoveItemFromCartInterface),
  UserController.removeCartItem
); //ok
router.get("/user/cart/clear", auth, UserController.clearCart); //ok
router.post(
  "/user/cart/update_qty",
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
router.get("/user/:type/list", auth, UserController.getUserList); //ok

export default router;
