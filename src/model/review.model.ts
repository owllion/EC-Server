import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
  Severity,
} from "@typegoose/typegoose";

import { User } from "./user.model";
import { Product } from "./product.model";
import { nanoid } from "nanoid";

@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Review {
  @prop({ ref: () => User, required: true })
  user: Ref<User>;

  @prop({ ref: "Product", required: true })
  product: Ref<Product>;

  @prop({ required: true, default: () => nanoid() })
  reviewId: string;

  @prop({ required: true, min: 1, max: 5 })
  rating: number;

  @prop({ required: true })
  comment: string;
}

const ReviewModel = getModelForClass(Review);

export default ReviewModel;
