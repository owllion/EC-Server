import ReviewModel, { Review } from "./../model/review.model";
import { RequestHandler } from "express";

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
    if (!review) res.status(400).send({ msg: "review not found" });

    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

export const modifyReview: RequestHandler = async (req, res) => {
  const { comment, rating, reviewId } = req.body as {
    comment: string;
    rating: number;
    reviewId: string;
  };

  try {
    const review = await ReviewModel.findOneAndUpdate(
      { reviewId },
      { comment, rating },
      { new: true }
    );
    if (!review) res.status(400).send({ message: "order does not exist" });

    await review!.save();

    res.status(200).send({ msg: "success", review });
  } catch (e) {
    res.status(400).send({ msg: e.message });
  }
};
