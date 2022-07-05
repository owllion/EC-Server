export interface createCouponInterface {
  code: string;
  discountType: string;
  amount: number;
  expiryDate: Date;
}

export interface DeleteCouponInterface {
  code: string;
}

export interface DeleteMultipleCouponsInterface {
  codesList: string[];
}

export interface ModifyCouponInterface {
  code: string;
}

export interface ApplyCouponInterface {
  totalPrice: number;
  code: string;
}

export interface RedeemCouponInterface {
  code: string;
}
