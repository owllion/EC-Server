import UserModel, { User } from "../model/user.model";
import { Product } from "../model/product.model";
import { DocumentType } from "@typegoose/typegoose";
import { OAuth2Client } from "google-auth-library";
import config from "config";
// service 顾名思义是为了服务而生，为了业务而生，是为了一个抽象而生，可以写一个 EmailService 去处理邮件的相关逻辑，写一个 AuthorizationService 去处理登录注册，总之是为了处理一系列的业务，在这个层次你不应该去访问 http 中的参数，而是在 controller 中传递一个参数，或者构造一个对象传递到 service。

//controller 和 service 也应该是多对多的关系，一个 controller 中当然是可以调用多个 service，一个 service 当然也可以被多个 controller 调用，service 还可以是互相调用。

//service 可以被各种环境调用，虽然更多时候它只有一种能力，仅仅去处理 controller 发过来的 http 请求

export const checkIfEmailIsRegisteredWithGoogleLogin = (
  password: string | undefined
) =>
  // has password -> register with email(false) .
  // no password -> register with google login(true) .
  password ? false : true;

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
const oAuth2Client = new OAuth2Client(
  config.get<string>("clientID"),
  config.get<string>("clientSecret"),
  "postmessage"
);
export const getGoogleAuthTokens = async (code: string) => {
  const { tokens } = await oAuth2Client.getToken(code);
  return tokens;
};
export const verifyIdToken = async (idToken: string) => {
  return await oAuth2Client.verifyIdToken({
    idToken,
    expectedAudience: config.get<string>("clientID"),
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
