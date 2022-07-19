import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Coupon {
  @prop({ required: true, unique: true })
  code: string;

  @prop()
  description: string;

  @prop({ required: true })
  discountType: string;

  @prop({ required: true })
  amount: number;

  @prop({ required: true })
  expiryDate: Date;

  @prop({ required: true })
  minimumAmount: number;
}

const CouponModel = getModelForClass(Coupon);

export default CouponModel;
