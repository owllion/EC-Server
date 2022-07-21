import express from "express";
import * as OrderController from "../controller/order.controller";
import auth from "../middleware/auth.middleware";
import validateInput from "../middleware/validate.middleware";
import * as Interface from "../schema";

const router = express.Router();

router.use(auth);
router.post(
  "/order/create",
  validateInput(Interface.CreateOrderInterface),
  OrderController.createOrder
); //ok
router.patch(
  "/order/update",
  validateInput(Interface.UpdateOrderInterface),
  OrderController.modifyOrder
); //ok
router.post(
  "/order/detail",
  validateInput(Interface.GetOrderDetailInterface),
  OrderController.getOrderDetail
); //ok

export default router;
