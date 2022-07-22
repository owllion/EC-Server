export interface IOrderItem
  extends Record<string, string | number | undefined> {
  orderId: string;
  deliveryAddress?: string;
  orderStatus?: number;
}
export interface IField extends Omit<IOrderItem, "orderId"> {}
