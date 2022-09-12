import OrderModel from "../model/order.model.js";
import * as OrderServices from "../services/order.service.js";
export const createOrder = async (req, res) => {
    try {
        const order = new OrderModel({
            ...req.body,
            owner: req.user.id,
            name: req.user.name,
            email: req.user.email,
        });
        await order.save();
        req.user.cartList = [];
        if (order.discountCode)
            req.user = OrderServices.markUsedCode(req.user, order.discountCode);
        await req.user.save();
        res.status(201).send({
            msg: "success",
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const modifyOrder = async (req, res) => {
    const { orderItem } = req.body;
    try {
        const order = await OrderServices.getModifiedItem(orderItem);
        await order.save();
        res.status(200).send({ msg: "success", order });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const getOrderDetail = async (req, res) => {
    const { orderId } = req.body;
    try {
        const order = await OrderModel.findOne({ orderId }).populate("owner");
        if (!order)
            throw new Error("order not found");
        res.status(200).send({
            msg: "success",
            detail: order,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
//# sourceMappingURL=order.controller.js.map