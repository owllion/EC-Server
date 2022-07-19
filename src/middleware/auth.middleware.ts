import config from "config";
import UserModel from "../model/user.model";
import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwt";

interface JwtPayload {
  _id: string;
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token =
      (req.body as { token: string }).token ||
      req.header("Authorization") ||
      "".replace("Bearer ", "");
    if (!token) {
      res.status(403).send({ message: "No token provided!" });
    }
    const decoded = verifyJwt(
      token,
      config.get<string>("jwtSecret")
    ) as JwtPayload;

    // if (!decoded) res.status(400).send({ msg: "jwt must be provided." });

    const user = await UserModel.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error("User does not exist");
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ msg: e.message });
  }
};

export default auth;
