import express from "express";
import * as OrderController from "../controller/order.controller";
const router = express.Router();

router.post("/update/order", OrderController.modifyOrder);
router.post("/create/order", OrderController.createOrder);
export default router;
