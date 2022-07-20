import express from "express";
import * as CouponController from "../controller/coupon.controller";
import auth from "../middleware/auth.middleware";

const router = express.Router();

router.use(auth);
router.post("/coupon/create", CouponController.createCoupon); //ok
router.patch("/coupon/update", CouponController.modifyCoupon); //ok
router.delete("/coupon/delete", CouponController.deleteCoupon); //ok
router.post("/coupon/redeem", CouponController.redeemCoupon); //ok
router.post("/coupon/apply", CouponController.applyCoupon); //ok

export default router;
