import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
  pre,
} from "@typegoose/typegoose";
import { User } from "./user.model";
import CouponModel, { Coupon } from "./coupon.model";

@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: { virtuals: true },
    // output virtuals，也可設定把model instnace轉成json時要去掉的欄位
    toObject: { virtuals: true },
  },
})
@pre<User>("find", function (next) {
  this.populate("coupon", "code");
  next();
})
export class UserCoupon {
  //直接關聯要得欄位，沒有pk、fk概念，所以也不用特地寫  user_id = Column(String(80), ForeignKey("user.id"), primary_key=True, nullable=False)之類的。

  @prop({ ref: "User" })
  user: Ref<User>;

  @prop({ ref: "Coupon" })
  coupon: Ref<Coupon>;

  @prop({ default: false })
  isUsed: boolean;
}

const UserCouponModel = getModelForClass(UserCoupon);

export default UserCouponModel;
