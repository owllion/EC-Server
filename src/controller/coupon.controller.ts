import CouponModel, { Coupon } from "./../model/coupon.model";
import { RequestHandler, Request, Response } from "express";

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

export const modifyCoupon: RequestHandler = async (req, res) => {
  const { couponItem } = req.body as { couponItem: Partial<Coupon> };

  try {
    const fieldList: Partial<Coupon>[] = [];

    const updateFields = Object.keys(couponItem);

    updateFields.forEach((item) => fieldList.push({ [item]: req.body[item] }));

    const coupon = await CouponModel.findOneAndUpdate(
      { code: couponItem.code },
      { $set: { ...fieldList } }
    );

    console.log({ coupon });

    // const coupon = await CouponModel.findOne({ code: couponItem.code });
    // if (coupon) {
    //   // updateFields.forEach(
    //   //   (update:any ) => (coupon[update] = couponItem[update])

    //   );

    await coupon!.save();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};
