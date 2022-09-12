import * as jwt from "jsonwebtoken";
export const signJwt = (object, key, options) => {
    const signKey = Buffer.from(key, "base64").toString("ascii");
    return jwt.sign(object, signKey, {
        ...(options && options),
    });
};
export const verifyJwt = (token, key) => {
    const publicKey = Buffer.from(key, "base64").toString("ascii");
    try {
        const decoded = jwt.verify(token, publicKey);
        return decoded;
    }
    catch (err) {
        throw new Error(err);
    }
};
//# sourceMappingURL=jwt.js.map