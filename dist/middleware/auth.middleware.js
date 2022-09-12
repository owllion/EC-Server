import config from "config";
import UserModel from "../model/user.model.js";
import { verifyJwt } from "../utils/jwt.js";
const auth = async (req, res, next) => {
    try {
        const token = req.body.token ||
            req.header("Authorization")?.replace("Bearer ", "");
        if (!token)
            throw new Error("No token provided!");
        const decoded = verifyJwt(token, config.get("jwtSecret"));
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
    }
    catch (e) {
        res.status(401).send({ msg: e.message });
    }
};
export default auth;
//# sourceMappingURL=auth.middleware.js.map