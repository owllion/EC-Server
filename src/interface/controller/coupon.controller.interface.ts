export interface ICoupon
  extends Record<string, string | undefined | Date | number> {
  id: string;
  code?: string;
  description?: string;
  discount?: string;
  amount?: number;
  expiryDate?: Date;
  minimumAmount?: number;
}

export interface IList extends Omit<ICoupon, "id"> {}
