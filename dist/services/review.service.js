import { omit } from "ramda";
import ReviewModel from "../model/review.model.js";
export const getModifiedItem = async (reviewItem) => {
    let updateFields = {};
    Object.keys(omit(["reviewId"], reviewItem)).forEach((item) => (updateFields[item] = reviewItem[item]));
    const review = await ReviewModel.findOneAndUpdate({ reviewId: reviewItem.reviewId }, updateFields, { new: true });
    if (!review)
        throw new Error("review not found");
    return review;
};
export const checkIfReviewExists = async (reviewId) => {
    if (!(await ReviewModel.findOne({ reviewId })))
        throw new Error(`Review not found`);
};
export const checkIfUserHasCommented = async (productId, userId) => {
    const hasCommented = await ReviewModel.findOne({
        user: userId,
        product: productId,
    });
    if (hasCommented)
        throw new Error("You have already commented on this product");
};
//# sourceMappingURL=review.service.js.map