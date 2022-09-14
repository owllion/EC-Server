import { OAuth2Client } from "google-auth-library";
import { DocumentType } from "@typegoose/typegoose";

import { Product } from "../model/product.model";
import { sendLink } from "../utils/email";
import UserModel, { User } from "../model/user.model";

export const checkIfEmailIsRegisteredWithGoogleLogin = (
  password: string | undefined
) => {
  // has password -> register with email(false) .
  // no password -> register with google login(true) .
  if (!password) {
    throw new Error("This email is already registered with google login");
  }
};

export const checkIfEmailIsVerified = (verified: boolean) => {
  if (!verified) throw new Error("Please verify your email!");
};

export const findUser = async ({
  field,
  value,
}: {
  field: string;
  value: string;
}) => {
  return await UserModel.findOne({ [field]: value });
};

export const createUser = async (info: Partial<User>) => {
  const user = new UserModel(info);
  await user.save();
  return user;
};

interface ISendLink {
  user: DocumentType<User>;
  email: string;
  linkType: string;
  urlParams: string;
}

export const sendVerifyOrResetLink = async ({
  user,
  email,
  linkType,
  urlParams,
}: ISendLink) => {
  const verifyToken = await user.generateLinkToken();
  const link = `${process.env.FRONTEND_DEPLOY_URL}/auth/${urlParams}/${verifyToken}`;
  sendLink({ type: linkType, link, email });
};

export const getTokens = async (user: DocumentType<User>) => ({
  token: await user.generateAuthToken(),
  refreshToken: await user.generateRefreshToken(),
});

export const getCartLength = (cartList: DocumentType<Product>[]) => {
  return cartList.reduce((total, cur) => total + cur?.qty!, 0);
};

/**
 * Google Login
 */
console.log("有跑到上面");
const oAuth2Client = new OAuth2Client(
  process.env.CLIENT_ID!,
  process.env.CLIENT_SECRET!,
  "postmessage"
);
console.log("有跑道下面");
console.log({ oAuth2Client });
export const getGoogleAuthTokens = async (code: string) => {
  try {
    console.log(code, code);
    const { tokens } = await oAuth2Client.getToken(code);
    console.log(tokens);
    return tokens;
  } catch (e) {
    console.log(e, "這是錯誤");
    throw new Error(e);
  }
};

export const setCredentials = async (
  tokens: Record<string, string | number>
) => {
  console.log(oAuth2Client, "前面");

  oAuth2Client.setCredentials(tokens);
  console.log(oAuth2Client, "後面");
};

export const verifyIdToken = async (idToken: string) => {
  return await oAuth2Client.verifyIdToken({
    idToken,
    expectedAudience: process.env.CLIENT_ID!,
  });
};

export const addItem = (
  user: User,
  product: DocumentType<Product>,
  productId: string,
  qtyProps: number,
  sizeProps: string
) => {
  const index: number = user.cartList.findIndex(
    (item) => item._id?.equals(productId) && item.size === sizeProps
  );
  if (!user.cartList.length || index === -1) {
    product.size = sizeProps;
    product.qty = qtyProps;
    (user.cartList as DocumentType<Product>[]).push(product);

    return user;
  } else if (user.cartList.length > 0 || index !== -1) {
    user.cartList = user.cartList.map((item, idx): any =>
      idx === index
        ? { ...item, qty: item.qty ? item.qty + qtyProps : qtyProps }
        : item
    );
    return user;
  }
};

export const checkIfProductExistsInFavList = (
  user: User,
  productId: string
) => {
  const res = (user.favList as Product[]).find(
    (item) => item.productId === productId
  );
  console.log(res);
  if (res) throw new Error("Product is already in the list");
};
