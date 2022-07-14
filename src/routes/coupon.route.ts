import express from "express";
import * as CouponController from "../controller/coupon.controller";
const router = express.Router();

router.post("/create/coupon", CouponController.createCoupon);
router.post("/update/coupon", CouponController.modifyCoupon);

export default router;
