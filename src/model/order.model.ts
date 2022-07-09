import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
} from "@typegoose/typegoose";
import { CreateProductInterface } from "../interface/product.interface";
import User from "./user.model";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Order {
  @prop({ required: true })
  orderId: string;

  @prop({ default: null })
  order_status: string;

  @prop({ ref: () => User })
  owner: Ref<typeof User>;
  //equal to  { type: Schema.Types.ObjectId, ref: 'User' },

  @prop({ required: true })
  delivery_address: string;

  @prop({ required: true })
  order_item: CreateProductInterface[];

  @prop()
  discount?: number;

  @prop()
  discount_code: string;

  @prop({ required: true })
  total_price: number;

  @prop({ default: "credit-card" })
  payment_method: string;

  @prop({ default: 0 }) //0 -> paid
  payment_status: number;

  @prop({ required: true, default: Date.now() })
  payment_date: Date;

  @prop({ default: "cancel" })
  cancel: string;
}

const OrderModel = getModelForClass(Order);

export default OrderModel;
