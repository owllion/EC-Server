import { Coupon } from "../model/coupon.model";

export interface createCouponInterface {
  code: string;
  discountType: string;
  amount: number;
  expiryDate: Date;
}

interface ICode {
  code: string;
}
export interface DeleteCouponInterface extends ICode {}

export interface DeleteMultipleCouponsInterface {
  codeList: string[];
}

export interface ModifyCouponInterface {}

export interface ApplyCouponInterface extends ICode {
  totalPrice: number;
}

export interface RedeemCouponInterface extends ICode {}
