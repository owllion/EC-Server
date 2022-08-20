import express from "express";
import * as OrderController from "../controller/order.controller";
import auth from "../middleware/auth.middleware";
import validateInput from "../middleware/validate.middleware";
import * as Interface from "../schema";

const router = express.Router();

router.post(
  "/order",
  auth,
  validateInput(Interface.CreateOrderInterface),
  OrderController.createOrder
); //ok
router.patch(
  "/order",
  auth,
  validateInput(Interface.UpdateOrderInterface),
  OrderController.modifyOrder
); //ok
router.post(
  "/order/detail",
  auth,
  validateInput(Interface.GetOrderDetailInterface),
  OrderController.getOrderDetail
); //ok

export default router;
