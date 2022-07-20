import { RequestHandler, Request, Response } from "express";
import OrderModel, { Order } from "../model/order.model";
import { omit } from "ramda";

export const createOrder: RequestHandler = async (req, res) => {
  try {
    const order = new OrderModel({
      ...(req.body as Order),
      owner: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });

    await order.save();

    req.user.cartList = [];

    if (order.discountCode) {
      const filter = (
        req.user as {
          couponList: {
            code: string;
            discountType: string;
            amount: number;
            expiryDate: Date;
            minimumAmount: number;
          }[];
        }
      ).couponList.filter((i) => i.code !== order.discountCode);

      req.user.couponList = filter;
    }
    await req.user.save();

    res.status(201).send({
      msg: "success",
      order,
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};
interface IOrderItem extends Record<string, string | number | undefined> {
  orderId: string;
  deliveryAddress?: string;
  orderStatus?: number;
}
interface IField extends Omit<IOrderItem, "orderId"> {}

export const modifyOrder: RequestHandler = async (req, res) => {
  const { orderItem } = req.body as { orderItem: IOrderItem };
  const updateFields: IField = {};

  Object.keys(omit(["orderId"], orderItem)).forEach((item) => {
    updateFields[item] = orderItem[item];
  });

  console.log(omit(["orderId"], orderItem));
  try {
    const order = await OrderModel.findOneAndUpdate(
      { orderId: orderItem.orderId },
      updateFields,
      { new: true }
    );
    if (!order) throw new Error("order does not exist");

    await order!.save();
    res.status(200).send({ msg: "success", order });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const getOrderDetail: RequestHandler = async (req, res) => {
  const { orderId } = req.body as { orderId: string };
  try {
    const order = await OrderModel.findOne({ orderId }).populate("owner");
    console.log(order, "order");
    if (!order) throw new Error("order not found");

    res.status(200).send({
      msg: "success",
      order,
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};
