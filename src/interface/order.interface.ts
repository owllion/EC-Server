import { CreateProductInterface } from "./product.interface";

export interface CreateOrderInterface {
  orderId: string;
  order_status: string;
  userId: string;
  name: string;
  email: string;
  delivery_address: string;
  order_item: Array<CreateProductInterface>;
  discount: number;
  discount_code: string;
  total_price: number;
  payment_method: string;
}
interface baseIdInterface {
  orderId: string;
}
export interface CancelOrder extends baseIdInterface {}

export interface DeleteOrder extends baseIdInterface {}

export interface DeleteMultipleOrdersInterface {
  deleteOrders: Array<string>;
}

export interface GetOrderDetailInterface extends baseIdInterface {}
