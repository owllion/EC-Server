import express from "express";
import * as OrderController from "../controller/order.controller";
import auth from "../middleware/auth.middleware";

const router = express.Router();

router.use(auth);
router.post("/order/create", OrderController.createOrder); //ok
router.patch("/order/update", OrderController.modifyOrder); //ok
router.post("/order/detail", OrderController.getOrderDetail); //ok

export default router;
