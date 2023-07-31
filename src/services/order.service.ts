import { omit } from "ramda";
import * as OrderInterface from "../interface/controller/order.controller.interface";
import OrderModel from "../model/order.model";
import { User } from "../model/user.model";
import CouponModel, { Coupon } from "../model/coupon.model";
import UserCouponModel, { UserCoupon } from "../model/userCoupon.model";
import { ObjectId } from "mongoose";
import { DocumentType } from "@typegoose/typegoose";
import { couponNotFound, orderNotFound } from "../constant/apiMsg";

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
  if (!order) throw new Error(orderNotFound);
  return order;
};

export const setCouponAsUsed = async (
  userId: ObjectId,
  discountCode: String
) => {
  const coupon = await CouponModel.findOne({ code: discountCode });

  const userCoupon: DocumentType<UserCoupon> | null =
    await UserCouponModel.findOne({
      user: userId,
      coupon: coupon?._id,
    });

  if (userCoupon) {
    userCoupon.isUsed = true;
    await userCoupon.save();
  } else {
    throw new Error(couponNotFound);
  }
};
