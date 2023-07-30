import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
  pre,
} from "@typegoose/typegoose";
import UserCouponModel, { UserCoupon } from "./userCoupon.model";

@pre<Coupon>("deleteOne", async function (next) {
  const id = this.getFilter()["_id"];
  await UserCouponModel.deleteMany({ coupon: id });

  next();
})
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

  @prop({
    ref: "UserCoupon", //collection name
    foreignField: "coupon", //該colleciton裡面要關聯的欄位
    localField: "_id", //對方要和此collection關聯的目標欄位
  })
  relatedCoupons: Ref<UserCoupon>[];
}

const CouponModel = getModelForClass(Coupon);

export default CouponModel;
