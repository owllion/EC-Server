import { RequestHandler } from "express";
import CouponModel, { Coupon } from "../model/coupon.model";
import * as CouponServices from "../services/coupon.service";
import * as CouponInterface from "../interface/controller/coupon.controller.interface";
import UserCouponModel from "../model/userCoupon.model";
import { couponAlreadyUsed, doNotOwnCoupon } from "../constant/apiMsg";

export const createCoupon: RequestHandler = async (req, res) => {
  const coupon = new CouponModel(req.body as Coupon);
  try {
    await coupon.save();
    res.status(201).send({
      msg: "Coupon has been created",
      coupon,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const deleteCoupon: RequestHandler = async (req, res) => {
  const { code } = req.body as { code: string };
  try {
    const coupon = await CouponServices.findCoupon({
      field: "code",
      value: code,
    });
    await coupon!.remove();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const deleteMultipleCoupons: RequestHandler = async (req, res) => {
  const { codeList: batch } = req.body as { codeList: string[] };

  try {
    await CouponModel.deleteMany({
      code: {
        $in: batch,
      },
    });

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const modifyCoupon: RequestHandler = async (req, res) => {
  const { couponItem } = req.body as { couponItem: CouponInterface.ICoupon };

  try {
    const coupon = await CouponServices.modifyCoupon(couponItem);
    await coupon!.save();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const applyCoupon: RequestHandler<
  {},
  {},
  { totalPrice: number; code: string; couponId: string }
> = async (req, res) => {
  const { totalPrice, code, couponId } = req.body;
  try {
    const coupon = await CouponServices.findCoupon({
      field: "code",
      value: code,
    });
    console.log(coupon, "this is coupon!");

    const userCoupon = await UserCouponModel.findOne({
      user: req.user._id,
      coupon: coupon._id,
    });
    if (!userCoupon) throw new Error(doNotOwnCoupon);
    if (userCoupon.isUsed) throw new Error(couponAlreadyUsed);

    const {
      expiryDate,
      minimumAmount,
      discountType,
      amount,
    }: Required<Omit<Coupon, "description" | "code">> = coupon;

    await CouponServices.isExpired(expiryDate);

    await CouponServices.isShort(minimumAmount, totalPrice);

    const { priceAfterDiscount, discountedAmount } =
      await CouponServices.getPriceAndDiscount(
        discountType,
        totalPrice,
        amount
      );

    res.send({
      msg: "success",
      priceAfterDiscount,
      discountedAmount,
      usedCode: code,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const redeemCoupon: RequestHandler<{}, {}, { code: string }> = async (
  req,
  res
) => {
  try {
    // await CouponServices.addCouponToUserCouponList(req.body.code, req.user);

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
