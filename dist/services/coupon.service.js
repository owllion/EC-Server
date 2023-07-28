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
exports.addCouponToUserCouponList = exports.getModifiedItem = exports.getPriceAndDiscount = exports.isShort = exports.isExpired = exports.findCoupon = void 0;
const ramda_1 = require("ramda");
const coupon_model_1 = __importDefault(require("../model/coupon.model"));
const findCoupon = ({ field, value, }) => __awaiter(void 0, void 0, void 0, function* () {
    const coupon = yield coupon_model_1.default.findOne({ [field]: value });
    if (!coupon)
        throw new Error("Coupon not found!");
    return coupon;
});
exports.findCoupon = findCoupon;
const isExpired = (expiryDate) => __awaiter(void 0, void 0, void 0, function* () {
    const now = Date.now() / 1000;
    const expire = Math.floor(new Date(expiryDate).valueOf() / 1000);
    if (expire - now < 0)
        throw new Error("This code is already expired!");
});
exports.isExpired = isExpired;
const isShort = (minimumAmount, totalPrice) => __awaiter(void 0, void 0, void 0, function* () {
    if (minimumAmount) {
        if (totalPrice < minimumAmount)
            throw new Error(`You are ${minimumAmount - totalPrice} dollars short!`);
    }
});
exports.isShort = isShort;
const getPriceAndDiscount = (discountType, totalPrice, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const finalPrice = discountType === "debate"
        ? totalPrice - amount
        : Math.round(totalPrice * (amount * 0.01));
    return {
        discountTotal: finalPrice,
        discount: totalPrice - finalPrice,
    };
});
exports.getPriceAndDiscount = getPriceAndDiscount;
const getModifiedItem = (couponItem) => __awaiter(void 0, void 0, void 0, function* () {
    const updateFields = {};
    Object.keys((0, ramda_1.omit)(["_id"], couponItem)).forEach((item) => {
        updateFields[item] = couponItem[item];
    });
    const coupon = yield coupon_model_1.default.findByIdAndUpdate({ _id: couponItem._id }, updateFields, { new: true });
    if (!coupon)
        throw new Error("Coupon not found");
    return coupon;
});
exports.getModifiedItem = getModifiedItem;
const addCouponToUserCouponList = (code, user) => __awaiter(void 0, void 0, void 0, function* () {
    const coupon = yield (0, exports.findCoupon)({
        field: "code",
        value: code,
    });
    user.couponList.push(coupon);
    yield user.save();
});
exports.addCouponToUserCouponList = addCouponToUserCouponList;
//# sourceMappingURL=coupon.service.js.map