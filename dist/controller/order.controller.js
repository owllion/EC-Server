"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderDetail = exports.modifyOrder = exports.createOrder = void 0;
const order_model_1 = __importDefault(require("../model/order.model"));
const OrderServices = __importStar(require("../services/order.service"));
const apiMsg_1 = require("../constant/apiMsg");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = new order_model_1.default(Object.assign(Object.assign({}, req.body), { owner: req.user.id, name: req.user.name, email: req.user.email }));
        yield order.save();
        req.user.cartList = [];
        if (order.discountCode)
            req.user = OrderServices.setCouponAsUsed(req.user._id, order.discountCode);
        yield req.user.save();
        res.status(201).send({
            msg: "success",
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.createOrder = createOrder;
const modifyOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderItem } = req.body;
    try {
        const order = yield OrderServices.getModifiedItem(orderItem);
        yield order.save();
        res.status(200).send({ msg: "success", order });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.modifyOrder = modifyOrder;
const getOrderDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderId } = req.body;
    try {
        const order = yield order_model_1.default.findOne({ orderId }).populate("owner");
        if (!order)
            throw new Error(apiMsg_1.orderNotFound);
        res.status(200).send({
            msg: "success",
            detail: order,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
});
exports.getOrderDetail = getOrderDetail;
//# sourceMappingURL=order.controller.js.map