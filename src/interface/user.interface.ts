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
  file: Buffer;
}

export interface ForgotPasswordInterface {
  /**
   * @TJS-format email
   */
  email: string;
}
export interface ResetPasswordInterface {
  /**
   * @TJS-format email
   */
  email: string;
  token: string;
  password: string;
}

export interface UserInfoModifyInterface {
  name: string;
  /**
   * @TJS-pattern ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$
   */
  phone: string;
}
export interface UserPasswordModifyInterface {
  password: string;
}

export interface AddToFavInterface {
  productId: string;
}
export interface RemoveFromFavInterface {
  productId: string;
  favList: object[];
}

export interface RemoveItemFromCartInterface {
  productId: string;
  cartList: object[];
}

export interface UpdateQtyInterface {
  productId: string;
  cartList: object[];
  qty: number;
}
export interface AddToCartInterface {
  productId: string;
  qty: number;
}
