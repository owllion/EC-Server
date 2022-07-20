import express from "express";
import * as UserController from "../controller/user.controller";
import auth from "../middleware/auth.middleware";

const router = express.Router();

//public API endpoint
router.post("/login", UserController.login); //ok
router.post("/register", UserController.register); //ok
router.post("/forgot_password", UserController.forgotPassword); //ok
router.post("/reset_password", UserController.resetPassword); //ok
router.post("/refresh_token", UserController.getRefreshToken); //ok

//Protected API endpoint
router.use(auth); //ok
router.get("/logout", UserController.logout); //ok

router.post("/user/upload", UserController.uploadImg);

router.post("/user/cart/remove", UserController.removeCartItem);
router.get("/user/cart/clear", UserController.clearCart);
router.post("/user/cart/update_qty", UserController.updateItemQty);
router.post("/user/cart/add", UserController.addToCart);

router.post("/user/fav/remove", UserController.removeFromFav);
router.post("/user/fav/add", UserController.addToFav);

router.patch("/user/update/info", UserController.userInfoModify); //ok
router.post("/user/update/password", UserController.passwordModify); //ok
router.get("/user/order_list", UserController.getUserOrderList); //ok
router.get("/user/review_list", UserController.getUserReviewList);

export default router;
