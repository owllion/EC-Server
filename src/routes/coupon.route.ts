import express from "express";
import * as CouponController from "../controller/coupon.controller";
import auth from "../middleware/auth.middleware";
import validateInput from "../middleware/validate.middleware";
import * as Interface from "../schema";

const router = express.Router();

router.use(auth);
router.post(
  "/coupon/create",
  validateInput(Interface.CreateCouponInterface),
  CouponController.createCoupon
); //ok
router.patch(
  "/coupon/update",
  validateInput(Interface.ModifyCouponInterface),
  CouponController.modifyCoupon
); //ok
router.delete(
  "/coupon/delete",
  validateInput(Interface.DeleteCouponInterface),
  CouponController.deleteCoupon
); //ok
router.post(
  "/coupon/redeem",
  validateInput(Interface.RedeemCouponInterface),
  CouponController.redeemCoupon
);
router.post(
  "/coupon/apply",
  validateInput(Interface.ApplyCouponInterface),
  CouponController.applyCoupon
); //ok

export default router;
