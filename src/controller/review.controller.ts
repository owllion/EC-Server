import ReviewModel, { Review } from "./../model/review.model";
import { RequestHandler } from "express";
import { omit } from "ramda";

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
interface IReview extends Record<string, string | number | undefined> {
  comment?: string;
  rating?: number;
  reviewId: string;
}
interface IList extends Omit<IReview, "reviewId"> {}

export const modifyReview: RequestHandler<
  unknown,
  unknown,
  { reviewItem: IReview },
  unknown
> = async (req, res) => {
  const { reviewItem } = req.body;

  let updateFields: IList = {};

  Object.keys(omit(["reviewId"], reviewItem)).forEach(
    (item) => (updateFields[item] = reviewItem[item])
  );

  try {
    const review = await ReviewModel.findOneAndUpdate(
      { reviewId: reviewItem.reviewId },
      updateFields,
      { new: true }
    );
    if (!review) throw new Error("review does not exist");

    await review!.save();

    res.status(200).send({ msg: "success", review });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};
