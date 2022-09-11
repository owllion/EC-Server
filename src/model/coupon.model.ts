import pkg from "@typegoose/typegoose";
const { getModelForClass, modelOptions, prop } = pkg;

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Coupon {
  @prop({ required: true, unique: true, trim: true })
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

  @prop({ default: false })
  isUsed: boolean;
}

const CouponModel = getModelForClass(Coupon);

export default CouponModel;
