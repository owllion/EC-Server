"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Product = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var nanoid_1 = require("nanoid");
var review_model_1 = require("./review.model");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        (0, typegoose_1.prop)({ required: true, "default": function () { return (0, nanoid_1.nanoid)(); } })
    ], Product.prototype, "productId");
    __decorate([
        (0, typegoose_1.prop)({ required: true, unique: true, trim: true })
    ], Product.prototype, "productName");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Product.prototype, "imageList");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Product.prototype, "price");
    __decorate([
        (0, typegoose_1.prop)({ "default": 0 })
    ], Product.prototype, "salePrice");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Product.prototype, "brand");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Product.prototype, "category");
    __decorate([
        (0, typegoose_1.prop)({ "default": "F" })
    ], Product.prototype, "size");
    __decorate([
        (0, typegoose_1.prop)({ "default": "" })
    ], Product.prototype, "color");
    __decorate([
        (0, typegoose_1.prop)({ "default": "", trim: true })
    ], Product.prototype, "description");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Product.prototype, "stock");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Product.prototype, "availability");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Product.prototype, "sales");
    __decorate([
        (0, typegoose_1.prop)({
            ref: review_model_1.Review,
            foreignField: "product",
            localField: "_id"
        })
    ], Product.prototype, "reviews");
    __decorate([
        (0, typegoose_1.prop)()
    ], Product.prototype, "qty");
    __decorate([
        (0, typegoose_1.prop)({ "default": false })
    ], Product.prototype, "isChecked");
    Product = __decorate([
        (0, typegoose_1.modelOptions)({
            schemaOptions: {
                timestamps: true,
                toJSON: { virtuals: true },
                toObject: { virtuals: true }
            },
            options: {
                allowMixed: typegoose_1.Severity.ALLOW
            }
        }),
        (0, typegoose_1.index)({ sales: -1 })
    ], Product);
    return Product;
}());
exports.Product = Product;
var ProductModel = (0, typegoose_1.getModelForClass)(Product);
exports["default"] = ProductModel;
