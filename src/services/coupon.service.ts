import CouponModel from "../model/coupon.model";
import { omit } from "ramda";
import * as CouponInterface from "../interface/controller/coupon.controller.interface";

export const findCoupon = async ({
  field,
  value,
}: {
  field: string;
  value: string;
}) => {
  const coupon = await CouponModel.findOne({ [field]: value });
  if (!coupon) throw new Error("Coupon not found!");
  return coupon;
};

export const isExpired = async (expiryDate: Date) => {
  const now = Date.now() / 1000;
  const expire = Math.floor(new Date(expiryDate).valueOf() / 1000);
  //valueOf -> because ts does not allow us to put the value that type is not equal to number in Math.floor,so we need to add valueOf to turn Date -> number.

  if (expire - now < 0) throw new Error("This code is already expired!");
};

export const isShort = async (minimumAmount: number, totalPrice: number) => {
  // if code has the consumption threshold
  if (minimumAmount) {
    if (totalPrice < minimumAmount)
      throw new Error(`You are ${minimumAmount - totalPrice} dollars short!`);
  }
};

export const getPriceAndDiscount = async (
  discountType: string,
  totalPrice: number,
  amount: number
) => {
  const finalPrice =
    discountType === "rebate"
      ? totalPrice - amount
      : Math.round(totalPrice * (amount * 0.01));

  return {
    discountTotal: finalPrice,
    discount: totalPrice - finalPrice,
  };
};

export const getModifiedItem = async (couponItem: CouponInterface.ICoupon) => {
  const updateFields: CouponInterface.IList = {};

  Object.keys(omit(["_id"], couponItem)).forEach((item) => {
    updateFields[item] = couponItem[item];
  });

  const coupon = await CouponModel.findByIdAndUpdate(
    { _id: couponItem._id },
    updateFields,
    { new: true }
  );
  if (!coupon) throw new Error("Coupon not found");
  return coupon;
};
