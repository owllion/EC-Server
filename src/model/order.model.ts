import {
  getModelForClass,
  modelOptions,
  Severity,
  prop,
  Ref,
} from "@typegoose/typegoose";
import { nanoid } from "nanoid";

import { CreateProductInterface } from "../interface/product.interface";
import { User } from "./user.model";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW, //allow the use and execution of mongoose.Schema.Types.Mixed, if the inferred type cannot be set otherwise)
  },
})
export class Order {
  @prop({ default: 0 }) // 0-> completed, 1-> canceled
  orderStatus: number;

  @prop({ required: true, default: () => nanoid() })
  orderId: string;

  @prop({ ref: "User" })
  //circular dependencies
  //Must import {User},not UserModel(means whole user collection)
  //Only when you need to use the method like deleteMany、find,you import the whole model.
  owner: Ref<User>;
  //equal to  { type: Schema.Types.ObjectId, ref: 'User' },

  @prop({ required: true })
  deliveryAddress: string;

  @prop({ required: true })
  orderItem: CreateProductInterface[];

  @prop({ default: 0 })
  discount?: number;

  @prop({ default: "" })
  discountCode?: string;

  @prop({ required: true })
  totalPrice: number;

  @prop({ required: true, default: "creditCard" })
  paymentMethod: string;

  @prop({ required: true, default: 0 }) //0 -> paid
  paymentStatus: number;

  @prop({ required: true, default: Date.now() })
  paymentDate: Date;
}

const OrderModel = getModelForClass(Order);

export default OrderModel;
