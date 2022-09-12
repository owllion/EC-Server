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
exports.checkIfUserHasCommented = exports.checkIfReviewExists = exports.getModifiedItem = void 0;
const ramda_1 = require("ramda");
const review_model_1 = __importDefault(require("../model/review.model"));
const getModifiedItem = (reviewItem) => __awaiter(void 0, void 0, void 0, function* () {
    let updateFields = {};
    Object.keys((0, ramda_1.omit)(["reviewId"], reviewItem)).forEach((item) => (updateFields[item] = reviewItem[item]));
    const review = yield review_model_1.default.findOneAndUpdate({ reviewId: reviewItem.reviewId }, updateFields, { new: true });
    if (!review)
        throw new Error("review not found");
    return review;
});
exports.getModifiedItem = getModifiedItem;
const checkIfReviewExists = (reviewId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield review_model_1.default.findOne({ reviewId })))
        throw new Error(`Review not found`);
});
exports.checkIfReviewExists = checkIfReviewExists;
const checkIfUserHasCommented = (productId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const hasCommented = yield review_model_1.default.findOne({
        user: userId,
        product: productId,
    });
    if (hasCommented)
        throw new Error("You have already commented on this product");
});
exports.checkIfUserHasCommented = checkIfUserHasCommented;
//# sourceMappingURL=review.service.js.map