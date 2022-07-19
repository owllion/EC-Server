import jwt from "jsonwebtoken";

export const signJwt = (
  object: Object,
  key: String,
  options?: jwt.SignOptions | undefined
) => {
  const signKey = Buffer.from(key, "base64").toString("ascii");

  return jwt.sign(object, signKey, {
    ...(options && options),
  });
};

export const verifyJwt = <T>(token: string, key: String): T => {
  const publicKey = Buffer.from(key, "base64").toString("ascii");

  try {
    const decoded = jwt.verify(token, publicKey) as T;
    return decoded;
  } catch (err) {
    throw new Error(err);
  }
};
