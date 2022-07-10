import { RequestHandler } from "express";
import UserModel from "../model/user.model";

export const register: RequestHandler = async (req, res) => {
  const user = new UserModel(req.body);
  try {
    const random1 = Math.floor(Math.random() * 10);
    const random2 = Math.floor(Math.random() * 10);
    const userId = `${random1}${Date.now()}${random2}`;

    user.userId = userId;
    await user.save();

    const token = await user.generateAuthToken();
    const refreshToken = await user.generateRefreshToken();

    res.status(201).send({
      msg: "Registration success!",
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
