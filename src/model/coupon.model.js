"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Coupon = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var Coupon = /** @class */ (function () {
    function Coupon() {
    }
    __decorate([
        (0, typegoose_1.prop)({ required: true, unique: true, trim: true })
    ], Coupon.prototype, "code");
    __decorate([
        (0, typegoose_1.prop)()
    ], Coupon.prototype, "description");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Coupon.prototype, "discountType");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Coupon.prototype, "amount");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Coupon.prototype, "expiryDate");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Coupon.prototype, "minimumAmount");
    __decorate([
        (0, typegoose_1.prop)({ "default": false })
    ], Coupon.prototype, "isUsed");
    Coupon = __decorate([
        (0, typegoose_1.modelOptions)({
            schemaOptions: {
                timestamps: true
            }
        })
    ], Coupon);
    return Coupon;
}());
exports.Coupon = Coupon;
var CouponModel = (0, typegoose_1.getModelForClass)(Coupon);
exports["default"] = CouponModel;
