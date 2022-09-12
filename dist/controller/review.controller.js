import ReviewModel from "./../model/review.model.js";
import * as ReviewServices from "../services/review.service.js";
export const createReview = async (req, res) => {
    try {
        await ReviewServices.checkIfUserHasCommented(req.body.product, req.user.id);
        const review = new ReviewModel({
            ...req.body,
            user: req.user.id,
        });
        await review.save();
        res.status(201).send({
            msg: "successfully created",
            review,
        });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const deleteReview = async (req, res) => {
    const { reviewId } = req.body;
    try {
        const review = await ReviewModel.findOneAndDelete({ reviewId });
        if (!review)
            throw new Error("Review not found");
        res.status(200).send({ msg: "success" });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
export const modifyReview = async (req, res) => {
    try {
        await ReviewServices.checkIfReviewExists(req.body.reviewItem.reviewId);
        const review = await ReviewServices.getModifiedItem(req.body.reviewItem);
        await review.save();
        res.status(200).send({ msg: "success", review });
    }
    catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
//# sourceMappingURL=review.controller.js.map