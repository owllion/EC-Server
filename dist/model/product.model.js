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
const { getModelForClass, modelOptions, prop, Severity, index } = pkg;
import { nanoid } from "nanoid";
import { Review } from "./review.model.js";
let Product = class Product {
};
__decorate([
    prop({ required: true, default: () => nanoid() }),
    __metadata("design:type", String)
], Product.prototype, "productId", void 0);
__decorate([
    prop({ required: true, unique: true, trim: true }),
    __metadata("design:type", String)
], Product.prototype, "productName", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Array)
], Product.prototype, "imageList", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    prop({ default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "salePrice", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "brand", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    prop({ default: "F" }),
    __metadata("design:type", String)
], Product.prototype, "size", void 0);
__decorate([
    prop({ default: "" }),
    __metadata("design:type", String)
], Product.prototype, "color", void 0);
__decorate([
    prop({ default: "", trim: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "availability", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], Product.prototype, "sales", void 0);
__decorate([
    prop({
        ref: Review,
        foreignField: "product",
        localField: "_id",
    }),
    __metadata("design:type", Array)
], Product.prototype, "reviews", void 0);
__decorate([
    prop(),
    __metadata("design:type", Number)
], Product.prototype, "qty", void 0);
__decorate([
    prop({ default: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "isChecked", void 0);
Product = __decorate([
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
    index({ sales: -1 })
], Product);
export { Product };
const ProductModel = getModelForClass(Product);
export default ProductModel;
//# sourceMappingURL=product.model.js.map