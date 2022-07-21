import CouponModel, { Coupon } from "./../model/coupon.model";
import { RequestHandler } from "express";
import { omit } from "ramda";

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
    const coupon = await CouponModel.findOne({ code });

    await coupon!.remove();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const deleteMultipleCoupons: RequestHandler = async (req, res) => {
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
    res.status(500).send({ msg: e.message });
  }
};

interface ICoupon extends Record<string, string | undefined | Date | number> {
  id: string;
  code?: string;
  description?: string;
  discount?: string;
  amount?: number;
  expiryDate?: Date;
  minimumAmount?: number;
}
interface IList extends Omit<ICoupon, "id"> {}

export const modifyCoupon: RequestHandler = async (req, res) => {
  const { couponItem } = req.body as { couponItem: ICoupon };

  try {
    const updateFields: IList = {};

    Object.keys(omit(["_id"], couponItem)).forEach((item) => {
      updateFields[item] = couponItem[item];
    });

    const coupon = await CouponModel.findByIdAndUpdate(
      { _id: couponItem._id },
      updateFields,
      { new: true }
    );

    await coupon!.save();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
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
    //valueOf -> because ts does not allow us to put the value that type is not equal to number in Math.floor,so we need to add valueOf to turn Date -> number.

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
      coupon.discountType === "rebate"
        ? totalPrice - coupon.amount
        : Math.round(totalPrice * (coupon.amount * 0.01));

    const discount = totalPrice - finalPrice;
    res.send({
      msg: "success",
      finalPrice,
      discount,
      code,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

// export const getUserCoupon: RequestHandler = async (req, res) => {
//   try {
//     res.status(200).send({
//       msg: "success",
//       couponList: req.user.couponList,
//     });
//   } catch (e) {
//     res.status(500).send({ msg: e.message });
//   }
// };

export const redeemCoupon: RequestHandler = async (req, res) => {
  const { code } = req.body as { code: string };
  try {
    const coupon = await CouponModel.findOne({ code });
    if (!coupon) throw new Error("coupon does not exist");

    req.user.couponList.push(coupon);

    await req.user.save();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
