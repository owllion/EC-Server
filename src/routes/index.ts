import express from "express";
import user from "./user.route.js";
import coupon from "./coupon.route.js";
import order from "./order.route.js";
import product from "./product.route.js";
import review from "./review.route.js";

const router = express.Router();

router.use(product);
router.use(user);
router.use(coupon);
router.use(order);
router.use(review);

export default router;
