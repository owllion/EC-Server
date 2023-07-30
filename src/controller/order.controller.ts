import { RequestHandler } from "express";
import { IOrderItem } from "./../interface/controller/order.controller.interface";
import OrderModel, { Order } from "../model/order.model";
import * as OrderServices from "../services/order.service";
import { orderNotFound } from "../constant/apiMsg";

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

    if (order.discountCode)
      req.user = OrderServices.setCouponAsUsed(
        req.user._id,
        order.discountCode
      );

    await req.user.save();

    res.status(201).send({
      msg: "success",
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const modifyOrder: RequestHandler<
  {},
  {},
  { orderItem: IOrderItem }
> = async (req, res) => {
  const { orderItem } = req.body;
  try {
    const order = await OrderServices.getModifiedItem(orderItem);

    await order!.save();
    res.status(200).send({ msg: "success", order });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const getOrderDetail: RequestHandler<
  {},
  {},
  { orderId: string }
> = async (req, res) => {
  const { orderId } = req.body;
  try {
    const order = await OrderModel.findOne({ orderId }).populate("owner");

    if (!order) throw new Error(orderNotFound);

    res.status(200).send({
      msg: "success",
      detail: order,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
