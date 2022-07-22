import ReviewModel, { Review } from "./../model/review.model";
import { RequestHandler } from "express";
import * as ReviewInterface from "../interface/controller/review.controller.interface";
import * as ReviewServices from "../services/review.service";

export const createReview: RequestHandler = async (req, res) => {
  const review = new ReviewModel({
    ...(req.body as Review),
    user: req.user.id,
  });
  try {
    await review.save();
    res.status(201).send({
      msg: "Review has been created",
      review,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const deleteReview: RequestHandler = async (req, res) => {
  const { reviewId } = req.body as { reviewId: string };
  try {
    const review = await ReviewModel.findOneAndDelete({ reviewId });
    if (!review) throw new Error("Review not found");

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const modifyReview: RequestHandler<
  unknown,
  unknown,
  { reviewItem: ReviewInterface.IReview },
  unknown
> = async (req, res) => {
  try {
    await ReviewServices.checkIfReviewExists(req.body.reviewItem.reviewId);

    const review = await ReviewServices.getModifiedItem(req.body.reviewItem);

    await review!.save();

    res.status(200).send({ msg: "success", review });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
