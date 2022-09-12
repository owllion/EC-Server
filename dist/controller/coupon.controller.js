import CouponModel from "./../model/coupon.model.js";
import * as CouponServices from "../services/coupon.service.js";
export const createCoupon = async (req, res) => {
    const coupon = new CouponModel(req.body);
    try {
        await coupon.save();
        res.status(201).send({
            msg: "Coupon has been created",
            coupon,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const deleteCoupon = async (req, res) => {
    const { code } = req.body;
    try {
        const coupon = await CouponServices.findCoupon({
            field: "code",
            value: code,
        });
        await coupon.remove();
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const deleteMultipleCoupons = async (req, res) => {
    const { codeList: batch } = req.body;
    try {
        await CouponModel.deleteMany({
            code: {
                $in: batch,
            },
        });
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const modifyCoupon = async (req, res) => {
    const { couponItem } = req.body;
    try {
        const coupon = await CouponServices.getModifiedItem(couponItem);
        await coupon.save();
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const applyCoupon = async (req, res) => {
    const { totalPrice, code } = req.body;
    try {
        const coupon = await CouponServices.findCoupon({
            field: "code",
            value: code,
        });
        const { expiryDate, minimumAmount, discountType, amount, } = coupon;
        await CouponServices.isExpired(expiryDate);
        await CouponServices.isShort(minimumAmount, totalPrice);
        const { discountTotal, discount } = await CouponServices.getPriceAndDiscount(discountType, totalPrice, amount);
        res.send({
            msg: "success",
            discountTotal,
            discount,
            usedCode: code,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const redeemCoupon = async (req, res) => {
    try {
        await CouponServices.addCouponToUserCouponList(req.body.code, req.user);
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
//# sourceMappingURL=coupon.controller.js.map