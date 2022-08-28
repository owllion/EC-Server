import { RequestHandler } from "express";
import config from "config";
import { includes } from "ramda";

import UserModel, { User } from "../model/user.model";
import ProductModel, { Product } from "../model/product.model";
import { sendLink } from "../utils/email";
import { verifyJwt } from "../utils/jwt";
import * as UserServices from "../services/user.service";
import { DocumentType } from "@typegoose/typegoose";

//  controller，可以说他是对 http 中 request 的解析，以及对 response 的封装，它对应的是每一个路由，是 http 请求到代码的一个承接，它必须是可单例的，是无状态的。

//controller一般来说有两种，一种是薄Controller，一种是厚Controller。前者Controller只负责搜集参数、调用服务、转发或重定向结果集，其他业务逻辑(例如createUser)都放在Service层。后者则相反，业务逻辑都在Controller中进行处理，服务层只负责一些增删改查的方法。

export const register: RequestHandler<{}, {}, User> = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    await UserServices.sendVerifyOrResetLink({
      user,
      email: user.email,
      linkType: "verify",
      urlParams: "verify-email",
    });

    const { token, refreshToken } = await UserServices.getTokens(user);

    res.status(201).json({
      msg: "Registration success",
      result: {
        token,
        refreshToken,
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          cartLength: 0,
          avatarDefault: user.avatarDefault,
          avatarUpload: user.avatarUpload,
        },
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
    const { token, refreshToken } = await UserServices.getTokens(
      user as DocumentType<User>
    );

    res.status(200).send({
      msg: "success",
      result: {
        token,
        refreshToken,
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          cartLength: UserServices.getCartLength(
            user.cartList as DocumentType<Product>[]
          ),
          favList: user.favList,
          avatarDefault: user.avatarDefault,
          avatarUpload: user.avatarUpload,
        },
      },
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

export const googleLogin: RequestHandler<{}, {}, { code: string }> = async (
  req,
  res
) => {
  try {
    const tokens = await UserServices.getGoogleAuthTokens(req.body.code);
    const ticket = await UserServices.verifyIdToken(tokens.id_token);

    const { name, email, picture, locale } = ticket.getPayload();
    const user = await UserServices.findUser({ field: "email", value: email });

    let newUser;
    if (!user)
      newUser = await UserServices.createUser({
        fullName: name,
        email,
        avatarDefault: picture,
      });
    else if (user && user.password) {
      throw new Error("This email has already been registered");
    }
    const { token, refreshToken } = await UserServices.getTokens(
      (user || newUser) as DocumentType<User>
    );
    res.status(200).send({
      msg: "success",
      result: {
        token,
        refreshToken,
        user: {
          fullName: user?.fullName || name,
          email,
          phone: user?.phone,
          avatarDefault: picture,
          avatarUpload: user?.avatarUpload,
          cartLength: UserServices.getCartLength(
            (user || newUser)?.cartList as DocumentType<Product>[]
          ),
          favList: (user || newUser)?.favList,
          locale,
        },
      },
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const sendVerifyOrResetLink: RequestHandler<
  {},
  {},
  { email: string; type: string }
> = async (req, res) => {
  try {
    const user = await UserServices.findUser({
      field: "email",
      value: req.body.email,
    });
    if (!user) throw new Error("User not found");

    await UserServices.sendVerifyOrResetLink({
      user,
      email: req.body.email,
      linkType: req.body.type,
      urlParams:
        req.body.type === "verify" ? "verify-email" : "reset-password/token",
    });
    res.status(200).send({ msg: "email has been sent successfully" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const checkAccount: RequestHandler<{}, {}, { email: string }> = async (
  req,
  res
) => {
  try {
    const user = await UserServices.findUser({
      field: "email",
      value: req.body.email,
    });

    if (user) {
      UserServices.checkIfEmailIsRegisteredWithGoogleLogin(user.password);
      UserServices.checkIfEmailIsVerified(user.verified);
    }

    res.status(200).send({
      hasAccount: user ? true : false,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const verifyUser: RequestHandler<{}, {}, { token: string }> = async (
  req,
  res
) => {
  try {
    const decoded = verifyJwt<{ _id: string }>(
      req.body.token,
      config.get<string>("linkSecret")
    );

    const user = await UserServices.findUser({
      field: "_id",
      value: decoded._id,
    });
    if (!user) throw new Error("User not found");
    user.verified = true;
    await user.save();

    //return necessary info for login
    const { token, refreshToken } = await UserServices.getTokens(
      user as DocumentType<User>
    );

    res.status(200).send({
      msg: "verified",
      verified: true,
      result: {
        token,
        refreshToken,
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          cartLength: UserServices.getCartLength(user.cartList),
          favList: user.favList,
          avatarDefault: user.avatarDefault,
          avatarUpload: user.avatarUpload,
        },
      },
    });
  } catch (e) {
    if (e.message.includes("expired")) {
      res.status(401).send({ msg: "token has expired" });
      return;
    }
    res.status(500).send({ msg: e.message });
  }
};

export const checkIfTokenIsValid: RequestHandler<
  {},
  {},
  { token: string }
> = async (req, res) => {
  try {
    verifyJwt<{ _id: string }>(
      req.body.token,
      config.get<string>("linkSecret")
    );
    res.status(200).send({ isValid: true });
  } catch (e) {
    if (e.message.includes("expired")) {
      res.status(401).send({ isValid: false });
      return;
    }
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
    res.status(500).send({ msg: e.message });
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

export const uploadAvatar: RequestHandler<{}, {}, { url: string }> = async (
  req,
  res
) => {
  try {
    req.user.avatarUpload = req.body.url;
    await req.user.save();

    res.status(200).send({ msg: "success" });
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

    const user = await UserServices.findUser({ field: "email", value: email });

    if (!user) throw new Error("No user with that email!");

    await UserServices.sendVerifyOrResetLink({
      user,
      email,
      linkType: "reset",
      urlParams: "reset-password/token",
    });

    res.status(200).json({
      message: "email has been sent successfully",
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
      config.get<string>("linkSecret")
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
    res.status(500).send({ msg: e.message });
  }
};

interface ICartRemoveAction extends Pick<ICartAction, "productId" | "size"> {}
export const removeCartItem: RequestHandler<{}, {}, ICartRemoveAction> = async (
  req,
  res
) => {
  try {
    const index = req.user.cartList.findIndex(
      (item: ICartRemoveAction) =>
        item.productId === req.body.productId && item.size === req.body.size
    );
    if (index > -1)
      req.user.cartList = [
        ...req.user.cartList.slice(0, index),
        ...req.user.cartList.slice(index + 1),
      ];

    await req.user.save();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const clearCart: RequestHandler = async (req, res) => {
  try {
    req.user.cartList = [];
    await req.user.save();
    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

interface ICartAction {
  productId: string;
  type: string;
  size: string;
  qty?: number;
}
export const updateItemQty: RequestHandler<{}, {}, ICartAction> = async (
  req,
  res
) => {
  const { productId, type, size } = req.body;
  try {
    req.user.cartList = req.user.cartList.map((item: ICartAction) =>
      item.productId === productId && item.size === size
        ? {
            ...item,
            qty: type === "inc" ? item.qty! + 1 : item.qty! - 1,
          }
        : item
    );
    await req.user.save();

    res.status(200).send({ msg: "success" });
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
    size: string;
  }
> = async (req, res) => {
  const { productId, qty, size } = req.body;
  try {
    const product = await ProductModel.findOne({ _id: productId });
    if (!product) throw new Error("Product not found");

    const user = UserServices.addItem(req.user, product, productId, qty, size);

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
  { productId: string }
> = async (req, res) => {
  try {
    req.user.favList = req.user.favList.filter(
      (product: { productId: string }) =>
        product.productId !== req.body.productId
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
    const item = await ProductModel.findOne({ productId });
    if (!item) throw new Error("Product not found");

    await UserServices.checkIfProductExistsInFavList(req.user, productId);

    req.user.favList.push(item);

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
    firstName?: string;
    lastName?: string;
    fullName?: string;
    phone: string;
  }
> = async (req, res) => {
  try {
    (["firstName", "lastName", "fullName", "phone"] as const).forEach(
      (field) => (req.user[field] = req.body[field])
    );

    await req.user.save();

    res.status(200).send({
      msg: "success",
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const getPopulatedList: RequestHandler<{
  type: "order" | "review";
}> = async (req, res) => {
  const { type } = req.params;
  if (!type || !includes(type, ["order", "review"]))
    return res
      .status(400)
      .send({ msg: "params must be either order or review" });

  try {
    const user = await UserModel.findById(req.user.id).populate(`${type}List`);
    //If user has not placed any order/review, list will be an empty array added in req.user's document.

    res
      .status(200)
      .send({ message: "success", [`${type}List`]: user?.[`${type}List`] });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const getNormalList: RequestHandler<{
  type: "cartList" | "favList" | "couponList";
}> = (req, res) => {
  const { type: typeList } = req.params;
  try {
    res
      .status(200)
      .send({ message: "success", [typeList]: req.user[typeList] });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
