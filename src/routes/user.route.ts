import express from "express";
import * as UserController from "../controller/user.controller";
import auth from "../middleware/auth.middleware";

const router = express.Router();

//public API endpoint
router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.post("/forgot_password", UserController.forgotPassword);
router.post("/reset_password", UserController.resetPassword);
router.post("/refresh_token", UserController.getRefreshToken);

//Protected API endpoint
router.use(auth);
router.get("/logout", auth, UserController.logout);

router.post("/user/upload", UserController.uploadImg);

router.post("/user/cart/remove", UserController.removeCartItem);
router.get("/user/cart/clear", UserController.clearCart);
router.post("/user/cart/update_qty", UserController.updateItemQty);
router.post("/user/cart/add", UserController.addToCart);

router.post("/user/fav/remove", UserController.removeFromFav);
router.post("/user/fav/add", UserController.addToFav);

router.post("/user/update/info", UserController.userInfoModify);
router.post("/user/update/password", UserController.addToFav);
router.get("/user/order_list", UserController.getUserOrderList);

export default router;
