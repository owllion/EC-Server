import {
  getModelForClass,
  modelOptions,
  prop,
  pre,
  Severity,
  Ref,
} from "@typegoose/typegoose";

import { nanoid } from "nanoid";
import { User } from "./user.model";
import { Product } from "./product.model";

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
@pre<User>("find", function (next) {
  this.populate("user").populate("product");
  next();
})
export class Review {
  @prop({ ref: "User", required: true })
  user: Ref<User>;

  @prop({ ref: "Product", required: true })
  product: Ref<Product>;

  @prop({ required: true, default: () => nanoid() })
  reviewId: string;

  @prop({ required: true, min: 0.5, max: 5 })
  rating: number;

  @prop({ required: true })
  comment: string;
}

const ReviewModel = getModelForClass(Review);

export default ReviewModel;
