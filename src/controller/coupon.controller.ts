import { IList } from "./../interface/controller/coupon.controller.interface";
import CouponModel, { Coupon } from "./../model/coupon.model";
import { RequestHandler } from "express";
import { omit } from "ramda";

import * as CouponServices from "../services/coupon.service";
import * as CouponInterface from "../interface/controller/coupon.controller.interface";

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
    const coupon = await CouponServices.getModifiedItem(couponItem);
    await coupon!.save();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const applyCoupon: RequestHandler = async (req, res) => {
  const { totalPrice, code } = req.body as { totalPrice: number; code: string };
  try {
    const coupon = await CouponServices.findCoupon({
      field: "code",
      value: code,
    });

    const {
      expiryDate,
      minimumAmount,
      discountType,
      amount,
    }: Required<Omit<Coupon, "description" | "code">> = coupon;

    await CouponServices.isExpired(expiryDate);

    await CouponServices.isShort(minimumAmount, totalPrice);

    const { finalPrice, discount } = await CouponServices.getPriceAndDiscount(
      discountType,
      totalPrice,
      amount
    );

    res.send({
      msg: "success",
      finalPrice,
      discount,
      usedCode: code,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const redeemCoupon: RequestHandler = async (req, res) => {
  const { code } = req.body as { code: string };
  try {
    const coupon = await CouponServices.findCoupon({
      field: "code",
      value: code,
    });

    req.user.couponList.push(coupon);

    await req.user.save();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
