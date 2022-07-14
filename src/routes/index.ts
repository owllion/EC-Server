import express from "express";
import user from "./user.route";
import coupon from "./coupon.route";

const router = express.Router();

router.use(user);
router.use(coupon);

export default router;
