import express from "express";
import * as CouponController from "../controller/coupon.controller.js";
import auth from "../middleware/auth.middleware.js";
import validateInput from "../middleware/validate.middleware.js";
import * as Interface from "../schema/index.js";
const router = express.Router();
router.post("/coupon", auth, validateInput(Interface.CreateCouponInterface), CouponController.createCoupon);
router.patch("/coupon", auth, validateInput(Interface.ModifyCouponInterface), CouponController.modifyCoupon);
router.delete("/coupon", auth, validateInput(Interface.DeleteCouponInterface), CouponController.deleteCoupon);
router.post("/coupon/redeem", auth, validateInput(Interface.RedeemCouponInterface), CouponController.redeemCoupon);
router.post("/coupon/apply", auth, validateInput(Interface.ApplyCouponInterface), CouponController.applyCoupon);
export default router;
//# sourceMappingURL=coupon.route.js.map