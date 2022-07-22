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
  "/forgot_password",
  validateInput(Interface.ForgotPasswordInterface),
  UserController.forgotPassword
); //ok
router.post(
  "/reset_password",
  validateInput(Interface.ResetPasswordInterface),
  UserController.resetPassword
); //ok
router.post(
  "/refresh_token",
  validateInput(Interface.GetRefreshTokenInterface),
  UserController.getRefreshToken
); //ok

//Protected API endpoint
router.use(auth); //ok
router.get("/logout", UserController.logout); //ok

router.post(
  "/user/upload",
  validateInput(Interface.UploadAvatarInterface),
  UserController.uploadImg
);

router.post(
  "/user/cart/remove",
  validateInput(Interface.RemoveItemFromCartInterface),
  UserController.removeCartItem
);
router.get("/user/cart/clear", UserController.clearCart);
router.post(
  "/user/cart/update_qty",
  validateInput(Interface.UpdateQtyInterface),
  UserController.updateItemQty
);
router.post(
  "/user/cart/add",
  validateInput(Interface.AddToCartInterface),
  UserController.addToCart
);

router.post(
  "/user/fav/remove",
  validateInput(Interface.RemoveFromFavInterface),
  UserController.removeFromFav
);
router.post(
  "/user/fav/add",
  validateInput(Interface.AddToFavInterface),
  UserController.addToFav
);

router.patch(
  "/user/update/info",
  validateInput(Interface.UserInfoModifyInterface),
  UserController.userInfoModify
); //ok
router.post(
  "/user/update/password",
  validateInput(Interface.UserPasswordModifyInterface),
  UserController.passwordModify
); //ok
router.get("/user/:type/list", UserController.getUserList); //ok

export default router;
