import jwt from "jsonwebtoken";
import User from "../model/user.model";
import { NextFunction, Request, Response } from "express";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token =
      req.body.token || req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error("User does not exist!");
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ msg: e.message });
  }
};

export default auth;
