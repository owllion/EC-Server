import { findUser } from "./../services/user.service";
import { RequestHandler, Request, Response } from "express";
import validator from "validator";
import config from "config";

import UserModel from "../model/user.model";
import ProductModel, { Product } from "../model/product.model";
import { sendLink } from "../utils/email";
import { signJwt, verifyJwt } from "../utils/jwt";

//  controller，可以说他是对 http 中 request 的解析，以及对 response 的封装，它对应的是每一个路由，是 http 请求到代码的一个承接，它必须是可单例的，是无状态的。

//controller一般来说有两种，一种是薄Controller，一种是厚Controller。前者Controller只负责搜集参数、调用服务、转发或重定向结果集，其他业务逻辑(例如createUser)都放在Service层。后者则相反，业务逻辑都在Controller中进行处理，服务层只负责一些增删改查的方法。

export const register: RequestHandler = async (req, res) => {
  const user = new UserModel(req.body);
  try {
    await user.save();

    const token = await user.generateAuthToken();

    const refreshToken = await user.generateRefreshToken();

    // const link = `http://localhost:5001/verify-email/${token}`;
    // sendLink({ type: "verify", link, email: req.body.email });

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
    res.status(500).send({ msg: e.message });
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

export const forgotPassword: RequestHandler = async (req, res) => {
  try {
    const { email } = req.body as { email: string };

    if (!validator.isEmail(email)) {
      throw new Error("Email is invalid!");
    }
    const user = await findUser({ field: "email", value: email });

    if (!user) throw new Error("No user with that email!");

    const token: string = signJwt(
      { _id: user._id },
      config.get<string>("jwtSecret"),
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
    res.status(500).send({ msg: e.message });
  }
};

export const resetPassword: RequestHandler = async (req, res) => {
  try {
    // const { token } = req.params;

    const { password, token } = req.body as { password: string; token: string };

    const decoded = verifyJwt<{ _id: string }>(
      token,
      config.get<string>("jwtSecret")
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
    res.status(500).send({
      msg: e.message,
    });
  }
};

export const removeCartItem: RequestHandler = async (req, res) => {
  const { productId, cartList } = req.body as {
    productId: string;
    cartList: Product[];
  };
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
    req.user.save();
    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const updateItemQty: RequestHandler = async (req, res) => {
  const { productId, qty, cartList } = req.body as {
    productId: string;
    qty: number;
    cartList: Product[];
  };
  try {
    const itemIndex: number = cartList.findIndex(
      (item: { productId: string }) => item.productId === productId
    );

    if (itemIndex > -1) {
      const productItem = cartList[itemIndex];
      productItem.qty = qty;
      //cartList.set(itemIndex, productItem)
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

export const addToCart: RequestHandler = async (req, res) => {
  const { productId, qty } = req.body as {
    productId: string;
    qty: number;
    cartList: Product[];
  };
  try {
    const product = await ProductModel.findOne({ productId });

    //const productProperty = Object.keys(product)
    const index: number = req.user.cartList.findIndex(
      (item: { productId: string }) => item.productId === productId
    );

    //If cart is empty or can not find the product
    if (!req.user.cartList.length || index === -1) {
      const item = new ProductModel(product);
      item.qty = qty;
      req.user.cartList.push(item);
    } else if (req.user.cartList.length > 0) {
      //If cart already have products
      if (index !== -1) {
        //if find the product
        throw new Error("Item already exists in cart!");
      }
    }
    await req.user.save();
    res.status(200).send({
      msg: "success",
      cartList: req.user.cartList,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const removeFromFav: RequestHandler = async (req, res) => {
  const { productId, favList } = req.body as {
    productId: string;
    favList: Product[];
  };
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

export const addToFav: RequestHandler = async (req, res) => {
  const { productId } = req.body as { productId: string };
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

export const passwordModify: RequestHandler = async (req, res) => {
  const { password } = req.body as { password: string };
  try {
    req.user.password = password;

    await req.user.save();

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

interface Body extends Request {
  body: {
    name: string;
    email: string;
  };
}
export const userInfoModify = async (req: Body, res: Response) => {
  try {
    if (req.body.email) {
      const user = await findUser({ field: "email", value: req.body.email });

      if (user) throw new Error("Duplicate email");

      // const fields: (keyof typeof req.body)[] = ["name", "email"];

      // fields.forEach((field) => (req.user[field] = req.body[field]));
      (["name", "email"] as const).forEach(
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

export const getUserOrderList: RequestHandler = (req, res) => {
  try {
    const list = UserModel.findById(req.user.id).populate("orderList");
    //If user has not placed any order, orderList will be an empty array added in req.user's document.

    res.status(200).send({ message: "success", list });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
