import { RequestHandler, Request, Response } from "express";
import OrderModel, { Order } from "../model/order.model";

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

export const modifyOrder: RequestHandler = async (req, res) => {
  const { deliveryAddress, orderId } = req.body as {
    deliveryAddress: string;
    orderId: string;
  };

  try {
    const order = await OrderModel.findOneAndUpdate(
      { orderId },
      { deliveryAddress },
      { new: true }
    );
    if (!order) res.status(400).send({ message: "order does not exist" });

    await order!.save();
    res.status(200).send({ msg: "success", order });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

export const cancelOrder: RequestHandler = async (req, res) => {
  const { orderId } = req.body as { orderId: string };
  try {
    const order = await OrderModel.findOneAndUpdate(
      { orderId },
      { orderStatus: 1 },
      { new: true }
    );
    if (!order) res.status(400).send({ message: "order does not exist" });
    await order!.save();
    res.status(200).send({ msg: "success", order });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

export const getOrderDetail: RequestHandler = async (req, res) => {
  const { orderId } = req.body as { orderId: string };
  try {
    const order = await OrderModel.findOne({ orderId });

    if (!order) res.status(400).send({ message: "order does not exist" });

    res.status(200).send({
      msg: "success",
      order,
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};
