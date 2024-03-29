import { NextFunction, Request, Response } from "express";
import UserModel from "../model/user.model";
import { verifyJwt } from "../utils/jwt";

interface JwtPayload {
  _id: string;
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token =
      (req.body as { token: string }).token ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) throw new Error("No token provided!");

    const decoded = verifyJwt(token, process.env.JWT_SECRET!) as JwtPayload;

    const user = await UserModel.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error("User does not exist");
    }
    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    res.status(401).send({ msg: e.message });
  }
};

export default auth;
