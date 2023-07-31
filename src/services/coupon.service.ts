import { UserCoupon } from "./../model/userCoupon.model";
import { omit } from "ramda";
import { DocumentType } from "@typegoose/typegoose";
import CouponModel from "../model/coupon.model";
import * as CouponInterface from "../interface/controller/coupon.controller.interface";
import { User } from "../model/user.model";
import { Coupon } from "../model/coupon.model";
import { ObjectId } from "mongoose";
import UserCouponModel from "../model/userCoupon.model";
import { couponNotFound } from "../constant/apiMsg";

export const findCoupon = async ({
  field,
  value,
}: {
  field: string;
  value: string;
}) => {
  const coupon = await CouponModel.findOne({ [field]: value });
  if (!coupon) throw new Error(couponNotFound);
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
    discountType === "Fixed Amount"
      ? totalPrice - amount
      : Math.round(totalPrice * (amount * 0.01));

  return {
    priceAfterDiscount: finalPrice,
    discountedAmount: totalPrice - finalPrice,
  };
};

export const modifyCoupon = async (couponItem: CouponInterface.ICoupon) => {
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

export const issueCoupons = async (userId: ObjectId) => {
  console.log(userId, "這是issue的userId");
  await create10UserCoupons(userId);
};

const getRandom10CouponIds = async () => {
  try {
    const randomCouponIds = await CouponModel.aggregate([
      { $sample: { size: 10 } },
      { $project: { _id: 1 } },
    ]);

    console.log(randomCouponIds, "this is randomCids");

    const couponIds: ObjectId[] = randomCouponIds.map((c) => c._id);
    console.log(couponIds, "這些事coupond ids to string()");
    return couponIds;
  } catch (error) {
    console.error("Error fetching random coupon ids:", error);
    return [];
  }
};

const create10UserCoupons = async (userId: ObjectId) => {
  try {
    const ids = await getRandom10CouponIds();
    const userCoupons = [];

    for (const couponId of ids) {
      const coupon = await createUserCoupon(userId, couponId);
      userCoupons.push(coupon);
    }
    console.log(userCoupons, "這是userCpopons");
    await UserCouponModel.insertMany(userCoupons);
  } catch (error) {
    console.error("Something wrong when creating 10 coupons:", error);
  }
};

const createUserCoupon = async (userId: ObjectId, couponId: ObjectId) => {
  try {
    return new UserCouponModel({
      user: userId,
      coupon: couponId,
    });
  } catch (error) {
    console.error("Something wrong when creating the coupon:", error);
  }
};
