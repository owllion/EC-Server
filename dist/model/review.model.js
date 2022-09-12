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
exports.Review = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const nanoid_1 = require("nanoid");
let Review = class Review {
};
__decorate([
    (0, typegoose_1.prop)({ ref: "User", required: true }),
    __metadata("design:type", Object)
], Review.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: "Product", required: true }),
    __metadata("design:type", Object)
], Review.prototype, "product", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: () => (0, nanoid_1.nanoid)() }),
    __metadata("design:type", String)
], Review.prototype, "reviewId", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, min: 0.5, max: 5 }),
    __metadata("design:type", Number)
], Review.prototype, "rating", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Review.prototype, "comment", void 0);
Review = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
            toJSON: { virtuals: true },
            toObject: { virtuals: true },
        },
        options: {
            allowMixed: typegoose_1.Severity.ALLOW,
        },
    }),
    (0, typegoose_1.pre)("find", function (next) {
        this.populate("user").populate("product");
        next();
    })
], Review);
exports.Review = Review;
const ReviewModel = (0, typegoose_1.getModelForClass)(Review);
exports.default = ReviewModel;
//# sourceMappingURL=review.model.js.map