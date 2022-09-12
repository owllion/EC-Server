"use strict";
exports.__esModule = true;
var express_1 = require("express");
var OrderController = require("../controller/order.controller");
var auth_middleware_1 = require("../middleware/auth.middleware");
var validate_middleware_1 = require("../middleware/validate.middleware");
var Interface = require("../schema/index");
var router = express_1["default"].Router();
router.post("/order", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.CreateOrderInterface), OrderController.createOrder); //ok
router.patch("/order", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.UpdateOrderInterface), OrderController.modifyOrder); //ok
router.post("/order/detail", auth_middleware_1["default"], (0, validate_middleware_1["default"])(Interface.GetOrderDetailInterface), OrderController.getOrderDetail); //ok
exports["default"] = router;
