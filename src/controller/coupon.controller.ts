import CouponModel, { Coupon } from "./../model/coupon.model";
import { RequestHandler, Request, Response } from "express";
import { Prop } from "@typegoose/typegoose";

export const createCoupon: RequestHandler = async (req, res) => {
  const coupon = new CouponModel(req.body as Coupon);
  try {
    await coupon.save();
    res.status(201).send({
      msg: "Coupon has been created",
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

export const deleteCoupon: RequestHandler = async (req, res) => {
  const { code } = req.body as { code: string };
  try {
    const coupon = await CouponModel.findOne({ code });

    await coupon!.remove();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

export const deleteMultipleCoupon: RequestHandler = async (req, res) => {
  const { codeList: batch } = req.body as { codeList: string[] };
  console.log({ batch });
  try {
    await CouponModel.deleteMany({
      code: {
        $in: batch,
      },
    });

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

// type couponInterface<Type> = {
//   [Property in keyof Type]: Type[Property];
// };
interface ObjKeys {
  [key: string]: string | undefined | Date | number;
}
interface ICoupon extends ObjKeys {
  _id: string;
  code?: string;
  description?: string;
  discount?: string;
  amount?: number;
  expiryDate?: Date;
  minimumAmount?: number;
}
interface IList extends Omit<ICoupon, "_id"> {}

export const modifyCoupon: RequestHandler = async (req, res) => {
  const { couponItem } = req.body as { couponItem: ICoupon };

  try {
    const fieldList: IList = {};

    const updateFields = Object.keys(couponItem);

    updateFields.forEach((item) => {
      fieldList[item] = couponItem[item];
    });

    console.log({ code: couponItem.code }, fieldList, { new: true });
    const coupon = await CouponModel.findOneAndUpdate(
      { id: couponItem._id },
      fieldList,
      { new: true }
    );

    console.log({ coupon });

    await coupon!.save();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

export const applyCoupon: RequestHandler = async (req, res) => {
  const { totalPrice, code } = req.body as { totalPrice: number; code: string };
  try {
    const coupon = await CouponModel.findOne({ code });

    if (!coupon) {
      throw new Error("Code does not exist");
    }

    const { expiryDate, minimumAmount } = coupon as {
      expiryDate: Date;
      minimumAmount: number;
    };
    const now = Date.now() / 1000;
    const expire = Math.floor(new Date(expiryDate).valueOf() / 1000);
    const compare = expire - now;
    if (compare < 0) {
      throw new Error("This code is already expired!");
    }

    //if code has the consumption threshold
    if (minimumAmount) {
      //if user does not achieve the threshold
      if (totalPrice < minimumAmount) {
        throw new Error(`You are ${minimumAmount - totalPrice} dollars short!`);
      }
    }

    const finalPrice =
      coupon.discount_type === "rebate"
        ? totalPrice - coupon.amount
        : Math.round(totalPrice * (coupon.amount * 0.01));

    const discount = totalPrice - finalPrice;
    res.send({
      msg: "success",
      result: {
        finalPrice: finalPrice,
        discount,
        code,
      },
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

export const getUserCoupon: RequestHandler = async (req, res) => {
  try {
    res.status(200).send({
      msg: "success",
      couponList: req.user.couponList,
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

export const redeemCoupon: RequestHandler = async (req, res) => {
  const { code } = req.body as { code: string };
  try {
    const coupon = await CouponModel.findOne({ code });

    req.user.couponList.push(coupon);

    await req.user.save();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};
