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
  discount_type: string;

  @prop({ required: true })
  amount: number;

  @prop({ required: true })
  expiry_date: Date;
}

const CouponModel = getModelForClass(Coupon);

export default CouponModel;
