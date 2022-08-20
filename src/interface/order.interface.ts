import { CreateProductInterface } from "./product.interface";

export interface CreateOrderInterface {
  orderItem: Array<CreateProductInterface>;
  deliveryAddress: string;
  totalPrice: number;
  receiverName: string;
  discount?: number;
  discountCode?: string;
}
interface baseIdInterface {
  orderId: string;
}

export interface GetOrderDetailInterface extends baseIdInterface {}

export interface UpdateOrderInterface {
  orderItem: {
    orderId: string;
    deliveryAddress?: string;
    orderStatus?: number;
  };
}
