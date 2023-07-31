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
exports.issueCoupons = exports.modifyCoupon = exports.getPriceAndDiscount = exports.isShort = exports.isExpired = exports.findCoupon = void 0;
const ramda_1 = require("ramda");
const coupon_model_1 = __importDefault(require("../model/coupon.model"));
const userCoupon_model_1 = __importDefault(require("../model/userCoupon.model"));
const apiMsg_1 = require("../constant/apiMsg");
const findCoupon = ({ field, value, }) => __awaiter(void 0, void 0, void 0, function* () {
    const coupon = yield coupon_model_1.default.findOne({ [field]: value });
    if (!coupon)
        throw new Error(apiMsg_1.couponNotFound);
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
    const finalPrice = discountType === "Fixed Amount"
        ? totalPrice - amount
        : Math.round(totalPrice * (amount * 0.01));
    return {
        priceAfterDiscount: finalPrice,
        discountedAmount: totalPrice - finalPrice,
    };
});
exports.getPriceAndDiscount = getPriceAndDiscount;
const modifyCoupon = (couponItem) => __awaiter(void 0, void 0, void 0, function* () {
    const updateFields = {};
    Object.keys((0, ramda_1.omit)(["_id"], couponItem)).forEach((item) => {
        updateFields[item] = couponItem[item];
    });
    const coupon = yield coupon_model_1.default.findByIdAndUpdate({ _id: couponItem._id }, updateFields, { new: true });
    if (!coupon)
        throw new Error("Coupon not found");
    return coupon;
});
exports.modifyCoupon = modifyCoupon;
const issueCoupons = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userId, "這是issue的userId");
    yield create10UserCoupons(userId);
});
exports.issueCoupons = issueCoupons;
const getRandom10CouponIds = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const randomCouponIds = yield coupon_model_1.default.aggregate([
            { $sample: { size: 10 } },
            { $project: { _id: 1 } },
        ]);
        console.log(randomCouponIds, "this is randomCids");
        const couponIds = randomCouponIds.map((c) => c._id);
        console.log(couponIds, "這些事coupond ids to string()");
        return couponIds;
    }
    catch (error) {
        console.error("Error fetching random coupon ids:", error);
        return [];
    }
});
const create10UserCoupons = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ids = yield getRandom10CouponIds();
        const userCoupons = [];
        for (const couponId of ids) {
            const coupon = yield createUserCoupon(userId, couponId);
            userCoupons.push(coupon);
        }
        console.log(userCoupons, "這是userCpopons");
        yield userCoupon_model_1.default.insertMany(userCoupons);
    }
    catch (error) {
        console.error("Something wrong when creating 10 coupons:", error);
    }
});
const createUserCoupon = (userId, couponId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return new userCoupon_model_1.default({
            user: userId,
            coupon: couponId,
        });
    }
    catch (error) {
        console.error("Something wrong when creating the coupon:", error);
    }
});
//# sourceMappingURL=coupon.service.js.map