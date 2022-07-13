import { findUser } from "./../services/user.service";
import { RequestHandler, Request, Response } from "express";
import validator from "validator";
import config from "config";

import UserModel from "../model/user.model";
import { sendLink } from "../utils/email";
import { signJwt, verifyJwt } from "../utils/jwt";
import { Product } from "../model/product.model";

//  controller，可以说他是对 http 中 request 的解析，以及对 response 的封装，它对应的是每一个路由，是 http 请求到代码的一个承接，它必须是可单例的，是无状态的。

//controller一般来说有两种，一种是薄Controller，一种是厚Controller。前者Controller只负责搜集参数、调用服务、转发或重定向结果集，其他业务逻辑(例如createUser)都放在Service层。后者则相反，业务逻辑都在Controller中进行处理，服务层只负责一些增删改查的方法。

export const register: RequestHandler = async (req, res) => {
  const user = new UserModel(req.body);
  try {
    await user.save();

    const token = await user.generateAuthToken();

    const refreshToken = await user.generateRefreshToken();

    const link = `http://localhost:5001/verify-email/${token}`;
    sendLink({ type: "verify", link, email: "defrag55345@gmail.com" });

    res.status(201).json({
      msg: "Registration success",
      result: {
        token,
        refreshToken,
        user,
      },
    });
  } catch (e) {
    res.status(400).send({
      msg: e.message,
    });
  }
};

export const login: RequestHandler = async (req, res) => {
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
    res.status(400).send({ msg: e.message });
  }
};
export const logout: RequestHandler = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (item: { token: string }) => item.token !== req.token
    );

    await req.user.save();

    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
};
interface MyRequest extends Request {
  file: string;
}
//use Cloudinary
export const uploadImg = async (req: MyRequest, res: Response) => {
  console.log(req.file);
  try {
    await req.user.save();

    res.status(200).send({
      msg: "success",
      user: req.user,
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

export const forgotPassword: RequestHandler = async (req, res) => {
  try {
    const { email } = req.body as { email: string };

    if (!validator.isEmail(email)) {
      throw new Error("Email is invalid!");
    }
    const user = await findUser({ attr: "email", val: email });

    const token: string = signJwt(
      { _id: user._id },
      config.get<string>("privateSecret"),
      {
        expiresIn: "1d",
      }
    );
    sendLink({
      type: "reset",
      email,
      link: `http://localhost:8080/reset-password/${token}`,
    });

    res.status(200).json({
      message: "Successfully sent email",
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};

export const resetPassword: RequestHandler<{ token: string }> = async (
  req,
  res
) => {
  try {
    const { token } = req.params;

    if (!token) {
      throw new Error("Token has expired!");
    }

    const { password } = req.body as { password: string };

    const decoded = verifyJwt<{ _id: string }>(
      token,
      config.get<string>("publicSecret")
    );

    const user = await UserModel.findOne({ _id: decoded!._id });
    //If you don't  include the generic type, <T> would be bound to unknown

    if (!user) {
      throw new Error("User does not exist");
    }

    user.password = password;

    await user.save();

    res.status(200).send({
      msg: "Reset password successfully",
    });
  } catch (e) {
    res.status(400).send({
      msg: e.message,
    });
  }
};

export const removeOneItem: RequestHandler = async (req, res) => {
  const { productId, cartList } = req.body as {
    productId: string;
    cartList: Product[];
  };
  try {
    const filteredProduct = cartList.filter(
      (item: { productId: string }) => item.productId !== productId
    );

    req.user.cartList = filteredProduct;

    await req.user.save();

    res.status(200).send({
      msg: "success",
      cartList: req.user.cartList,
    });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};
