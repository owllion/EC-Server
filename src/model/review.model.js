"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Review = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var nanoid_1 = require("nanoid");
var Review = /** @class */ (function () {
    function Review() {
    }
    __decorate([
        (0, typegoose_1.prop)({ ref: "User", required: true })
    ], Review.prototype, "user");
    __decorate([
        (0, typegoose_1.prop)({ ref: "Product", required: true })
    ], Review.prototype, "product");
    __decorate([
        (0, typegoose_1.prop)({ required: true, "default": function () { return (0, nanoid_1.nanoid)(); } })
    ], Review.prototype, "reviewId");
    __decorate([
        (0, typegoose_1.prop)({ required: true, min: 0.5, max: 5 })
    ], Review.prototype, "rating");
    __decorate([
        (0, typegoose_1.prop)({ required: true })
    ], Review.prototype, "comment");
    Review = __decorate([
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
        (0, typegoose_1.pre)("find", function (next) {
            this.populate("user").populate("product");
            next();
        })
    ], Review);
    return Review;
}());
exports.Review = Review;
var ReviewModel = (0, typegoose_1.getModelForClass)(Review);
exports["default"] = ReviewModel;
