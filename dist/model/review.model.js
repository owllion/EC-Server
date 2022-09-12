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
const { getModelForClass, modelOptions, prop, pre, Severity } = pkg;
import { nanoid } from "nanoid";
let Review = class Review {
};
__decorate([
    prop({ ref: "User", required: true }),
    __metadata("design:type", Object)
], Review.prototype, "user", void 0);
__decorate([
    prop({ ref: "Product", required: true }),
    __metadata("design:type", Object)
], Review.prototype, "product", void 0);
__decorate([
    prop({ required: true, default: () => nanoid() }),
    __metadata("design:type", String)
], Review.prototype, "reviewId", void 0);
__decorate([
    prop({ required: true, min: 0.5, max: 5 }),
    __metadata("design:type", Number)
], Review.prototype, "rating", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], Review.prototype, "comment", void 0);
Review = __decorate([
    modelOptions({
        schemaOptions: {
            timestamps: true,
            toJSON: { virtuals: true },
            toObject: { virtuals: true },
        },
        options: {
            allowMixed: Severity.ALLOW,
        },
    }),
    pre("find", function (next) {
        this.populate("user").populate("product");
        next();
    })
], Review);
export { Review };
const ReviewModel = getModelForClass(Review);
export default ReviewModel;
//# sourceMappingURL=review.model.js.map