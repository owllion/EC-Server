import { RequestHandler } from "express";
import ReviewModel from "./../model/review.model";
import * as ReviewInterface from "../interface/controller/review.controller.interface";
import * as ReviewServices from "../services/review.service";
import { reviewNotFound } from "../constant/apiMsg";

export const createReview: RequestHandler<
  {},
  {},
  ReviewInterface.IReview
> = async (req, res) => {
  try {
    await ReviewServices.checkIfUserHasCommented(
      req.body.product as string,
      req.user.id
    );

    const review = new ReviewModel({
      ...req.body,
      user: req.user.id,
    });

    await review.save();
    res.status(201).send({
      msg: "successfully created",
      review,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const deleteReview: RequestHandler<
  {},
  {},
  { reviewId: string }
> = async (req, res) => {
  const { reviewId } = req.body;
  try {
    const review = await ReviewModel.findOneAndDelete({ reviewId });
    if (!review) throw new Error(reviewNotFound);

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
