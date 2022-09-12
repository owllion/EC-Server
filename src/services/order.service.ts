import { omit } from "ramda";
import * as OrderInterface from "../interface/controller/order.controller.interface";
import OrderModel from "../model/order.model";
import { User } from "../model/user.model";
import { Coupon } from "../model/coupon.model";

export const getModifiedItem = async (orderItem: OrderInterface.IOrderItem) => {
  const updateFields: OrderInterface.IField = {};

  Object.keys(omit(["_id"], orderItem)).forEach((item) => {
    updateFields[item] = orderItem[item];
  });

  const order = await OrderModel.findByIdAndUpdate(
    { _id: orderItem._id },
    updateFields,
    { new: true }
  );
  if (!order) throw new Error("order not found");
  return order;
};

export const markUsedCode = (user: User, discountCode: string | undefined) => {
  if (discountCode) {
    (user.couponList as Coupon[]) = user.couponList.map((coupon) =>
      coupon.code === discountCode ? { ...coupon, isUsed: true } : coupon
    );
    return user;
  }
  return user;
};
