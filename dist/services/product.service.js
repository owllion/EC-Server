"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModifiedItem = exports.generatePipeline = exports.getPriceRange = exports.getDetailWithReview = void 0;
const ramda_1 = require("ramda");
const product_model_1 = __importDefault(require("../model/product.model"));
const getDetailWithReview = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.default.findOne({ productId }).populate("reviews");
    if (!product)
        throw new Error("Product not found");
    return product;
});
exports.getDetailWithReview = getDetailWithReview;
const getPriceRange = (price) => {
    return {
        min_: Number(price.substring(0, price.indexOf("-"))) || 0,
        max_: Number(price.substring(price.indexOf("-") + 1)) || 0,
    };
};
exports.getPriceRange = getPriceRange;
const generatePipeline = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { keyword = "", brands, price, categories, sortBy, orderBy, page, } = query;
    let pipeline = [];
    const AMatch = {
        $match: {
            productName: {
                $regex: keyword,
                $options: "i",
            },
        },
    };
    if (price) {
        AMatch.$match["price"] = {
            $gte: (0, exports.getPriceRange)(price).min_,
            $lte: (0, exports.getPriceRange)(price).max_,
        };
    }
    if (brands) {
        AMatch.$match["brand"] = Array.isArray(brands)
            ? {
                $in: brands,
            }
            : brands;
    }
    if (categories) {
        AMatch.$match["category"] = Array.isArray(categories)
            ? {
                $in: categories,
            }
            : categories;
    }
    pipeline.push(AMatch);
    const AFacet = {
        $facet: {
            list: [],
            count: [
                {
                    $count: "totalDoc",
                },
            ],
        },
    };
    if (sortBy) {
        const ASort = {
            $sort: {
                [sortBy]: orderBy === "asc" ? 1 : -1,
                _id: orderBy === "asc" ? 1 : -1,
            },
        };
        AFacet.$facet.list.push(ASort);
    }
    AFacet.$facet.list.push({ $skip: (page - 1) * 12 }, { $limit: 12 });
    pipeline.push(AFacet);
    return yield product_model_1.default.aggregate(pipeline);
});
exports.generatePipeline = generatePipeline;
const getModifiedItem = (productItem) => __awaiter(void 0, void 0, void 0, function* () {
    const updateFields = {};
    Object.keys((0, ramda_1.omit)(["_id"], productItem)).forEach((item) => {
        updateFields[item] = productItem[item];
    });
    const product = yield product_model_1.default.findOneAndUpdate({ _id: productItem._id }, updateFields, { new: true });
    if (!product)
        throw new Error("Product not found");
    return product;
});
exports.getModifiedItem = getModifiedItem;
//# sourceMappingURL=product.service.js.map