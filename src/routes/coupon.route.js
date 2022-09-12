"use strict";
exports.__esModule = true;
var express_1 = require("express");
var CouponController = require("../controller/coupon.controller");
var auth_middleware_1 = require("../middleware/auth.middleware");
var validate_middleware_1 = require("../middleware/validate.middleware");
var Interface = require("../schema/index");
var router = express_1["default"].Router();
router.post("/coupon", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.CreateCouponInterface), CouponController.createCoupon); //ok
router.patch("/coupon", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.ModifyCouponInterface), CouponController.modifyCoupon); //ok
router["delete"]("/coupon", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.DeleteCouponInterface), CouponController.deleteCoupon); //ok
router.post("/coupon/redeem", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.RedeemCouponInterface), CouponController.redeemCoupon);
router.post("/coupon/apply", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.ApplyCouponInterface), CouponController.applyCoupon); //ok
exports["default"] = router;
