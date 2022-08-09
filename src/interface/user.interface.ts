import { Product } from "./../model/product.model";
export interface LoginInterface {
  /**
   * @TJS-format email
   */
  email: string;
  password: string;
}

export interface GoogleLoginInterface {
  /**
   * @TJS-format email
   */
  email: string;
}

export interface GetRefreshTokenInterface {
  refresh: string;
}
export interface RegisterInterface {
  /**
   * @TJS-format email
   */
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface UploadAvatarInterface {
  file: string | Blob | Buffer;
}

export interface ForgotPasswordInterface {
  /**
   * @TJS-format email
   */
  email: string;
}
export interface ResetPasswordInterface {
  token: string;
  password: string;
}

export interface UserInfoModifyInterface {
  firstName: string;
  lastName: string;
  /**
   * @TJS-pattern ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$
   */
  phone?: string | undefined;
}
export interface UserPasswordModifyInterface {
  password: string;
}

export interface AddToFavInterface {
  productId: string;
}
export interface RemoveFromFavInterface {
  productId: string;
  favList: Product[];
}

export interface RemoveItemFromCartInterface {
  productId: string;
  cartList: Product[];
}
export interface UpdateQtyInterface {
  productId: string;
  cartList: Product[];
  qty: number;
}
export interface AddToCartInterface {
  productId: string;
  qty: number;
}
