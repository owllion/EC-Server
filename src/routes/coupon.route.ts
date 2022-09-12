import express from "express";
import * as CouponController from "../controller/coupon.controller";
import auth from "../middleware/auth.middleware";
import validateInput from "../middleware/validate.middleware";
import * as Interface from "../schema/index";

const router = express.Router();

router.post(
  "/coupon",
  auth,
  validateInput(Interface.CreateCouponInterface),
  CouponController.createCoupon
); //ok
router.patch(
  "/coupon",
  auth,
  validateInput(Interface.ModifyCouponInterface),
  CouponController.modifyCoupon
); //ok
router.delete(
  "/coupon",
  auth,
  validateInput(Interface.DeleteCouponInterface),
  CouponController.deleteCoupon
); //ok
router.post(
  "/coupon/redeem",
  auth,
  validateInput(Interface.RedeemCouponInterface),
  CouponController.redeemCoupon
);
router.post(
  "/coupon/apply",
  auth,
  validateInput(Interface.ApplyCouponInterface),
  CouponController.applyCoupon
); //ok

export default router;
