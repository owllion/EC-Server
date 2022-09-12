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
exports.Order = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const nanoid_1 = require("nanoid");
let Order = class Order {
};
__decorate([
    (0, typegoose_1.prop)({ default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "orderStatus", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: () => (0, nanoid_1.nanoid)() }),
    __metadata("design:type", String)
], Order.prototype, "orderId", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: "User" }),
    __metadata("design:type", Object)
], Order.prototype, "owner", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "deliveryAddress", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Array)
], Order.prototype, "orderItem", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "discount", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: "" }),
    __metadata("design:type", String)
], Order.prototype, "discountCode", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "discountTotal", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 0, required: true }),
    __metadata("design:type", Number)
], Order.prototype, "shipping", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "receiverName", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: "creditCard" }),
    __metadata("design:type", String)
], Order.prototype, "paymentMethod", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "paymentStatus", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: Date.now() }),
    __metadata("design:type", Date)
], Order.prototype, "paymentDate", void 0);
Order = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
        },
        options: {
            allowMixed: typegoose_1.Severity.ALLOW,
        },
    })
], Order);
exports.Order = Order;
const OrderModel = (0, typegoose_1.getModelForClass)(Order);
exports.default = OrderModel;
//# sourceMappingURL=order.model.js.map