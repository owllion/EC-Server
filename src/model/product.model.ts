import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
  index,
  pre,
  Ref,
} from "@typegoose/typegoose";

import { nanoid } from "nanoid";
import ReviewModel, { Review } from "./review.model";

@pre<Product>("deleteOne", async function (next) {
  const id = this.getFilter()["_id"];
  await ReviewModel.deleteMany({ product: id });
  next();
})
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
  thumbnailList: string[];

  @prop({ required: true })
  thumbnail: string;

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
