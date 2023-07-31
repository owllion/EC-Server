"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCoupon = void 0;
const typegoose_1 = require("@typegoose/typegoose");
let UserCoupon = class UserCoupon {
};
__decorate([
    (0, typegoose_1.prop)({ ref: "User" }),
    __metadata("design:type", Object)
], UserCoupon.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: "Coupon" }),
    __metadata("design:type", Object)
], UserCoupon.prototype, "coupon", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], UserCoupon.prototype, "isUsed", void 0);
UserCoupon = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
            toJSON: {
                virtuals: true,
                transform: function (_, ret) {
                    delete ret.createdAt;
                    delete ret.updatedAt;
                    delete ret.id;
                },
            },
            toObject: { virtuals: true },
        },
    }),
    (0, typegoose_1.pre)("find", function (next) {
        this.populate("coupon");
        next();
    })
], UserCoupon);
exports.UserCoupon = UserCoupon;
const UserCouponModel = (0, typegoose_1.getModelForClass)(UserCoupon);
exports.default = UserCouponModel;
//# sourceMappingURL=userCoupon.model.js.map