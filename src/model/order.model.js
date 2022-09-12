"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Order = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var nanoid_1 = require("nanoid");
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        (0, typegoose_1.prop)({ "default": 0 }) // 0-> completed, 1-> canceled
    ], Order.prototype, "orderStatus");
    __decorate([
        (0, typegoose_1.prop)({ required: true, "default": function () { return (0, nanoid_1.nanoid)(); } })
    ], Order.prototype, "orderId");
    __decorate([
        (0, typegoose_1.prop)({ ref: "User" })
        //circular dependencies
        //Must import {User},not UserModel(means whole user collection)
        //Only when you need to use the method like deleteMany、find,you import the whole model.
    ], Order.prototype, "owner");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Order.prototype, "deliveryAddress");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Order.prototype, "orderItem");
    __decorate([
        (0, typegoose_1.prop)({ "default": 0 })
    ], Order.prototype, "discount");
    __decorate([
        (0, typegoose_1.prop)({ "default": "" })
    ], Order.prototype, "discountCode");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Order.prototype, "total");
    __decorate([
        (0, typegoose_1.prop)({ "default": 0 })
    ], Order.prototype, "discountTotal");
    __decorate([
        (0, typegoose_1.prop)({ "default": 0, required: true })
    ], Order.prototype, "shipping");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Order.prototype, "receiverName");
    __decorate([
        (0, typegoose_1.prop)({ required: true, "default": "creditCard" })
    ], Order.prototype, "paymentMethod");
    __decorate([
        (0, typegoose_1.prop)({ required: true, "default": 0 }) //0 -> paid
    ], Order.prototype, "paymentStatus");
    __decorate([
        (0, typegoose_1.prop)({ required: true, "default": Date.now() })
    ], Order.prototype, "paymentDate");
    Order = __decorate([
        (0, typegoose_1.modelOptions)({
            schemaOptions: {
                timestamps: true
            },
            options: {
                allowMixed: typegoose_1.Severity.ALLOW
            }
        })
    ], Order);
    return Order;
}());
exports.Order = Order;
var OrderModel = (0, typegoose_1.getModelForClass)(Order);
exports["default"] = OrderModel;
