import { omit } from "ramda";
import * as ReviewInterface from "../interface/controller/review.controller.interface";
import ReviewModel from "../model/review.model";

export const getModifiedItem = async (reviewItem: ReviewInterface.IReview) => {
  let updateFields: ReviewInterface.IList = {};

  Object.keys(omit(["reviewId"], reviewItem)).forEach(
    (item) => (updateFields[item] = reviewItem[item])
  );

  const review = await ReviewModel.findOneAndUpdate(
    { reviewId: reviewItem.reviewId },
    updateFields,
    { new: true }
  );
  if (!review) throw new Error("review not found");
  return review;
};

export const checkIfReviewExists = async (reviewId: string) => {
  return await ReviewModel.findOne({ reviewId });
};
