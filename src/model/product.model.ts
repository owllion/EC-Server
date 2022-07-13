import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Product {
  @prop({ required: true, default: () => nanoid() })
  productId: string;

  @prop({ required: true })
  productName: string;

  @prop({ required: true })
  delivery_address: string;

  @prop({ required: true })
  imageList: string[];

  @prop({ required: true })
  price: number;

  @prop({ default: 0 })
  sale_price?: number;

  @prop({ required: true })
  brand: string;

  @prop({ required: true })
  category: string;

  @prop({ default: "" })
  description?: string;

  @prop({ required: true })
  stock: number;

  @prop({ required: true })
  availability: boolean;

  @prop({ required: true })
  sales: number;

  @prop()
  qty?: number;

  @prop({ default: false })
  isChecked?: boolean;
}

const ProductModel = getModelForClass(Product);

export default ProductModel;
