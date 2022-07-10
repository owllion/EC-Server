import { RequestHandler } from "express";
import UserModel from "../model/user.model";

//  controller，可以说他是对 http 中 request 的解析，以及对 response 的封装，它对应的是每一个路由，是 http 请求到代码的一个承接，它必须是可单例的，是无状态的。

//controller一般来说有两种，一种是薄Controller，一种是厚Controller。前者Controller只负责搜集参数、调用服务、转发或重定向结果集，其他业务逻辑(例如createUser)都放在Service层。后者则相反，业务逻辑都在Controller中进行处理，服务层只负责一些增删改查的方法。

export const register: RequestHandler = async (req, res) => {
  const user = new UserModel(req.body);
  try {
    await user.save();

    const token = await user.generateAuthToken();

    const refreshToken = await user.generateRefreshToken();

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
