import express from "express";
import user from "./user.route";
import coupon from "./coupon.route";
import order from "./order.route";

const router = express.Router();

router.use(user);
router.use(coupon);
router.use(order);

export default router;
