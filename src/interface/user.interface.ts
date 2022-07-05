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
  refresh: string;
  /**
   * @TJS-format email
   */
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface UploadAvatarInterface {
  //do not know what type it's gonna be.
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

export interface UserInfoModify {
  name: string;
  /**
   * @TJS-pattern ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$
   */
  phone: string;
}
