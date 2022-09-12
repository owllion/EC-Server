import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
  index,
  Ref,
} from "@typegoose/typegoose";

import { nanoid } from "nanoid";
import { Review } from "./review.model";

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
@index({ sales: -1 })
export class Product {
  @prop({ required: true, default: () => nanoid() })
  productId: string;

  @prop({ required: true, unique: true, trim: true })
  productName: string;

  @prop({ required: true })
  imageList: string[];

  @prop({ required: true })
  price: number;

  @prop({ default: 0 })
  salePrice?: number;

  @prop({ required: true })
  brand: string;

  @prop({ required: true })
  category: string;

  @prop({ default: "F" })
  size: string;

  @prop({ default: "" })
  color: string;

  @prop({ default: "", trim: true })
  description?: string;

  @prop({ required: true })
  stock: number;

  @prop({ required: true })
  availability: boolean;

  @prop({ required: true })
  sales: number;

  @prop({
    ref: Review,
    foreignField: "product",
    localField: "_id",
  })
  reviews: Ref<Review>[];

  @prop()
  qty?: number;

  @prop({ default: false })
  isChecked?: boolean;
}

const ProductModel = getModelForClass(Product);

export default ProductModel;
