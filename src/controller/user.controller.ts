import { RequestHandler } from "express";
import validator from "validator";
import config from "config";
import { includes } from "ramda";

import UserModel, { User } from "../model/user.model";
import ProductModel, { Product } from "../model/product.model";
import { sendLink } from "../utils/email";
import { signJwt, verifyJwt } from "../utils/jwt";
import * as UserServices from "../services/user.service";

//  controller，可以说他是对 http 中 request 的解析，以及对 response 的封装，它对应的是每一个路由，是 http 请求到代码的一个承接，它必须是可单例的，是无状态的。

//controller一般来说有两种，一种是薄Controller，一种是厚Controller。前者Controller只负责搜集参数、调用服务、转发或重定向结果集，其他业务逻辑(例如createUser)都放在Service层。后者则相反，业务逻辑都在Controller中进行处理，服务层只负责一些增删改查的方法。

export const register: RequestHandler<{}, {}, User> = async (req, res) => {
  const user = new UserModel(req.body);
  try {
    await user.save();

    const token = await user.generateAuthToken();

    const refreshToken = await user.generateRefreshToken();

    const link = `http://localhost:5001/verify-email/${token}`;
    sendLink({ type: "verify", link, email: req.body.email });

    res.status(201).json({
      msg: "Registration success",
      result: {
        token,
        refreshToken,
        user,
      },
    });
  } catch (e) {
    res.status(500).send({
      msg: e.message,
    });
  }
};

export const login: RequestHandler<
  {},
  {},
  { email: string; password: string }
> = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findByCredentials(email, password);

    const token = await user.generateAuthToken();
    const refreshToken = await user.generateRefreshToken();

    res.status(200).send({
      msg: "success",
      result: {
        user,
        token,
        refreshToken,
      },
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
export const checkAccount: RequestHandler<{}, {}, { email: string }> = async (
  req,
  res
) => {
  const { email } = req.body;

  try {
    const user = await UserServices.findUser({ field: "email", value: email });
    console.log("this is user", user);
    res.status(200).send({
      hasAccount: user ? true : false,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
export const logout: RequestHandler = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (item: { token: string }) => item.token !== req.token
    );

    await req.user.save();

    res.status(200).send({ msg: "logout!" });
  } catch (e) {
    res.status(500).send({ msg: e });
  }
};

export const getRefreshToken: RequestHandler<
  {},
  {},
  { refresh: string }
> = async (req, res) => {
  try {
    const { refresh } = req.body;

    const decoded = verifyJwt<{ _id: string }>(
      refresh,
      config.get<string>("refreshSecret")
    );

    const user = await UserServices.findUser({
      field: "_id",
      value: decoded._id,
    });
    if (!user) throw new Error("User not found");

    const token = await user!.generateAuthToken();

    const refreshToken = await user!.generateRefreshToken();

    res.status(200).send({
      msg: "success",
      token,
      refreshToken,
    });
  } catch (e) {
    if (e.message.includes("expired")) {
      res.status(401).send({ msg: "token has expired" });
      return;
    }
    res.status(400).send({ msg: e.message });
  }
};

export const uploadImg: RequestHandler = async (req, res) => {
  console.log(req.file);
  try {
    await req.user.save();

    res.status(200).send({
      msg: "success",
      user: req.user,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const forgotPassword: RequestHandler<{}, {}, { email: string }> = async (
  req,
  res
) => {
  try {
    const { email } = req.body;

    if (!validator.isEmail(email)) {
      throw new Error("Email is invalid!");
    }
    const user = await UserServices.findUser({ field: "email", value: email });

    if (!user) throw new Error("No user with that email!");

    const token = signJwt({ _id: user._id }, config.get<string>("jwtSecret"), {
      expiresIn: "1d",
    });

    sendLink({
      type: "reset",
      email,
      link: `http://localhost:8080/reset-password/${token}`,
    });

    res.status(200).json({
      message: "Successfully sent email",
      token,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const resetPassword: RequestHandler<
  {},
  {},
  { password: string; token: string }
> = async (req, res) => {
  try {
    const { password, token } = req.body;
    const decoded = verifyJwt<{ _id: string }>(
      token,
      config.get<string>("jwtSecret")
    );

    const user = await UserServices.findUser({
      field: "_id",
      value: decoded._id,
    });
    if (!user) throw new Error("User not found");

    user.password = password;

    await user.save();

    res.status(200).send({
      msg: "success",
    });
  } catch (e) {
    res.status(500).send({
      msg: e.message,
    });
  }
};

export const removeCartItem: RequestHandler<
  {},
  {},
  {
    productId: string;
    cartList: Product[];
  }
> = async (req, res) => {
  const { productId, cartList } = req.body;
  try {
    const filteredProduct: Product[] = cartList.filter(
      (item: { productId: string }) => item.productId !== productId
    );

    req.user.cartList = filteredProduct;

    await req.user.save();

    res.status(200).send({
      msg: "success",
      cartList: req.user.cartList,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const clearCart: RequestHandler = async (req, res) => {
  try {
    req.user.cartList = [];
    await req.user.save();
    res.status(200).send({ msg: "success", cartList: req.user });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const updateItemQty: RequestHandler<
  {},
  {},
  {
    productId: string;
    qty: number;
    cartList: Product[];
  }
> = async (req, res) => {
  const { productId, qty, cartList } = req.body;
  try {
    const itemIndex = cartList.findIndex(
      (item: { productId: string }) => item.productId === productId
    );

    if (itemIndex > -1) {
      const productItem = cartList[itemIndex];
      productItem.qty = qty;
    }
    req.user.cartList = cartList;

    await req.user.save();

    res.status(200).send({
      msg: "success",
      cartList: req.user.cartList,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const addToCart: RequestHandler<
  {},
  {},
  {
    productId: string;
    qty: number;
  }
> = async (req, res) => {
  const { productId, qty } = req.body;
  try {
    const product = await ProductModel.findOne({ productId });

    const user = UserServices.addQty(req.user, product, productId, qty);

    req.user = user;
    await req.user.save();

    res.status(200).send({
      msg: "success",
      cartList: req.user.cartList,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const removeFromFav: RequestHandler<
  {},
  {},
  {
    productId: string;
    favList: Product[];
  }
> = async (req, res) => {
  const { productId, favList } = req.body;
  try {
    req.user.favList = favList.filter(
      (product: { productId: string }) => product.productId !== productId
    );

    await req.user.save();

    res.status(200).send({
      msg: "success",
      favList: req.user.favList,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const addToFav: RequestHandler<{}, {}, { productId: string }> = async (
  req,
  res
) => {
  const { productId } = req.body;
  try {
    const item = await ProductModel.find({ productId });
    console.log(item[0]); // item = array of object

    req.user.favList.push(item[0]);

    await req.user.save();

    res.status(200).send({
      msg: "success",
      favList: req.user.favList,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const passwordModify: RequestHandler<
  {},
  {},
  { password: string }
> = async (req, res) => {
  try {
    req.user.password = req.body.password;

    await req.user.save();

    res.status(200).send({ msg: "update successfully" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const userInfoModify: RequestHandler<
  {},
  {},
  {
    firstName: string;
    lastName: string;
    email: string;
  }
> = async (req, res) => {
  try {
    if (req.body.email) {
      const user = await UserServices.findUser({
        field: "email",
        value: req.body.email,
      });

      if (user) throw new Error("Duplicate email");

      // const fields: (keyof typeof req.body)[] = ["name", "email"];

      // fields.forEach((field) => (req.user[field] = req.body[field]));
      (["firstName", "lastName", "email"] as const).forEach(
        (field) => (req.user[field] = req.body[field])
      );
    }

    await req.user.save();

    res.status(200).send({
      msg: "success",
      user: req.user,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const getUserList: RequestHandler<{ type: "order" | "review" }> = async (
  req,
  res
) => {
  const { type } = req.params;
  if (!type || !includes(type, ["order", "review"]))
    return res
      .status(400)
      .send({ msg: "params must be either order or review" });

  try {
    const list = await UserModel.findById(req.user.id).populate(`${type}List`);
    //If user has not placed any order/review, list will be an empty array added in req.user's document.

    res.status(200).send({ message: "success", list });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
