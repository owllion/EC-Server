import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
  Severity,
} from "@typegoose/typegoose";

import { User } from "./user.model";
import { Product } from "./product.model";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Review {
  @prop({ ref: () => User, required: true })
  user: Ref<User>;

  @prop({ ref: () => Product, required: true })
  product: Ref<Product>;

  @prop({ required: true })
  rating: number;

  @prop({ required: true })
  content: string;
}

const ReviewModel = getModelForClass(Review);

export default ReviewModel;
