"use strict";
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
exports.setCouponAsUsed = exports.getModifiedItem = void 0;
const ramda_1 = require("ramda");
const order_model_1 = __importDefault(require("../model/order.model"));
const userCoupon_model_1 = __importDefault(require("../model/userCoupon.model"));
const getModifiedItem = (orderItem) => __awaiter(void 0, void 0, void 0, function* () {
    const updateFields = {};
    Object.keys((0, ramda_1.omit)(["_id"], orderItem)).forEach((item) => {
        updateFields[item] = orderItem[item];
    });
    const order = yield order_model_1.default.findByIdAndUpdate({ _id: orderItem._id }, updateFields, { new: true });
    if (!order)
        throw new Error("order not found");
    return order;
});
exports.getModifiedItem = getModifiedItem;
const setCouponAsUsed = (userId, discountCode) => __awaiter(void 0, void 0, void 0, function* () {
    const userCoupon = yield userCoupon_model_1.default.findOne({
        user: userId,
        coupon: discountCode,
    });
    if (userCoupon) {
        userCoupon.isUsed = true;
        yield userCoupon.save();
    }
    else {
        throw new Error("coupon not found");
    }
});
exports.setCouponAsUsed = setCouponAsUsed;
//# sourceMappingURL=order.service.js.map