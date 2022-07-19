import express from "express";
import * as UserController from "../controller/user.controller";
import auth from "../middleware/auth.middleware";

const router = express.Router();

//public API endpoint
router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.post("/forgot-password", UserController.forgotPassword);
router.post("/reset-password", UserController.resetPassword);

//Protected API endpoint
router.get("/logout", auth, UserController.forgotPassword);
router.post("/user/upload", auth, UserController.uploadImg);

router.post("/user/cart/remove", auth, UserController.removeCartItem);
router.get("/user/cart/clear", auth, UserController.clearCart);
router.post("/user/cart/update_qty", auth, UserController.updateItemQty);
router.post("/user/cart/add", auth, UserController.addToCart);

router.post("/user/fav/remove", auth, UserController.removeFromFav);
router.post("/user/fav/add", auth, UserController.addToFav);

router.post("/user/update/info", auth, UserController.userInfoModify);
router.post("/user/update/password", auth, UserController.addToFav);
router.get("/user/order_list", auth, UserController.getUserOrderList);

export default router;
