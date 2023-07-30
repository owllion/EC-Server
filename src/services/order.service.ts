import { omit } from "ramda";
import * as OrderInterface from "../interface/controller/order.controller.interface";
import OrderModel from "../model/order.model";
import { User } from "../model/user.model";
import { Coupon } from "../model/coupon.model";
import UserCouponModel, { UserCoupon } from "../model/userCoupon.model";
import { ObjectId } from "mongoose";
import { DocumentType } from "@typegoose/typegoose";

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

export const setCouponAsUsed = async (
  userId: ObjectId,
  discountCode: String
) => {
  const userCoupon: DocumentType<UserCoupon> | null =
    await UserCouponModel.findOne({
      user: userId,
      coupon: discountCode,
    });

  if (userCoupon) {
    userCoupon.isUsed = true;
    await userCoupon.save();
  } else {
    throw new Error("coupon not found");
  }
};
