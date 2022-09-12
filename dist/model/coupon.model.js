var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import pkg from "@typegoose/typegoose";
const { getModelForClass, modelOptions, prop } = pkg;
let Coupon = class Coupon {
};
__decorate([
    prop({ required: true, unique: true, trim: true }),
    __metadata("design:type", String)
], Coupon.prototype, "code", void 0);
__decorate([
    prop(),
    __metadata("design:type", String)
], Coupon.prototype, "description", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], Coupon.prototype, "discountType", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], Coupon.prototype, "amount", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Date)
], Coupon.prototype, "expiryDate", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], Coupon.prototype, "minimumAmount", void 0);
__decorate([
    prop({ default: false }),
    __metadata("design:type", Boolean)
], Coupon.prototype, "isUsed", void 0);
Coupon = __decorate([
    modelOptions({
        schemaOptions: {
            timestamps: true,
        },
    })
], Coupon);
export { Coupon };
const CouponModel = getModelForClass(Coupon);
export default CouponModel;
//# sourceMappingURL=coupon.model.js.map