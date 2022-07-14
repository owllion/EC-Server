import { Coupon } from "./../model/coupon.model";

export interface createCouponInterface {
  code: string;
  discountType: string;
  amount: number;
  expiryDate: Date;
}

export interface DeleteCouponInterface {
  code: string;
}

export interface DeleteMultipleCouponsInterface
  extends Partial<Omit<Coupon, "code">> {
  code: string;
}

export interface ModifyCouponInterface {}

export interface ApplyCouponInterface {
  totalPrice: number;
  code: string;
}

export interface RedeemCouponInterface {
  code: string;
}
