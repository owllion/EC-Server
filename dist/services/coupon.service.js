import { omit } from "ramda";
import CouponModel from "../model/coupon.model.js";
export const findCoupon = async ({ field, value, }) => {
    const coupon = await CouponModel.findOne({ [field]: value });
    if (!coupon)
        throw new Error("Coupon not found!");
    return coupon;
};
export const isExpired = async (expiryDate) => {
    const now = Date.now() / 1000;
    const expire = Math.floor(new Date(expiryDate).valueOf() / 1000);
    if (expire - now < 0)
        throw new Error("This code is already expired!");
};
export const isShort = async (minimumAmount, totalPrice) => {
    if (minimumAmount) {
        if (totalPrice < minimumAmount)
            throw new Error(`You are ${minimumAmount - totalPrice} dollars short!`);
    }
};
export const getPriceAndDiscount = async (discountType, totalPrice, amount) => {
    const finalPrice = discountType === "rebate"
        ? totalPrice - amount
        : Math.round(totalPrice * (amount * 0.01));
    return {
        discountTotal: finalPrice,
        discount: totalPrice - finalPrice,
    };
};
export const getModifiedItem = async (couponItem) => {
    const updateFields = {};
    Object.keys(omit(["_id"], couponItem)).forEach((item) => {
        updateFields[item] = couponItem[item];
    });
    const coupon = await CouponModel.findByIdAndUpdate({ _id: couponItem._id }, updateFields, { new: true });
    if (!coupon)
        throw new Error("Coupon not found");
    return coupon;
};
export const addCouponToUserCouponList = async (code, user) => {
    const coupon = await findCoupon({
        field: "code",
        value: code,
    });
    user.couponList.push(coupon);
    await user.save();
};
//# sourceMappingURL=coupon.service.js.map