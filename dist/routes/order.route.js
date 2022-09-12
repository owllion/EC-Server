import express from "express";
import * as OrderController from "../controller/order.controller.js";
import auth from "../middleware/auth.middleware.js";
import validateInput from "../middleware/validate.middleware.js";
import * as Interface from "../schema/index.js";
const router = express.Router();
router.post("/order", auth, validateInput(Interface.CreateOrderInterface), OrderController.createOrder);
router.patch("/order", auth, validateInput(Interface.UpdateOrderInterface), OrderController.modifyOrder);
router.post("/order/detail", auth, validateInput(Interface.GetOrderDetailInterface), OrderController.getOrderDetail);
export default router;
//# sourceMappingURL=order.route.js.map