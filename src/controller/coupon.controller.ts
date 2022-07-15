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
  expiry_date?: Date;
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
