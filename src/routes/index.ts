import express from "express";
import user from "./user.route";
import coupon from "./coupon.route";
import order from "./order.route";
import product from "./product.route";
import review from "./review.route";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello, World!");
});
router.use(product);
router.use(user);
router.use(coupon);
router.use(order);
router.use(review);

export default router;
