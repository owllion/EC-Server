import { omit } from "ramda";
import OrderModel from "../model/order.model.js";
export const getModifiedItem = async (orderItem) => {
    const updateFields = {};
    Object.keys(omit(["_id"], orderItem)).forEach((item) => {
        updateFields[item] = orderItem[item];
    });
    const order = await OrderModel.findByIdAndUpdate({ _id: orderItem._id }, updateFields, { new: true });
    if (!order)
        throw new Error("order not found");
    return order;
};
export const markUsedCode = (user, discountCode) => {
    if (discountCode) {
        user.couponList = user.couponList.map((coupon) => coupon.code === discountCode ? { ...coupon, isUsed: true } : coupon);
        return user;
    }
    return user;
};
//# sourceMappingURL=order.service.js.map