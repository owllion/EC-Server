import express from "express";
import * as ReviewController from "../controller/review.controller";
import auth from "../middleware/auth.middleware";
import validateInput from "../middleware/validate.middleware";
import * as Interface from "../schema/index";

const router = express.Router();

router.post(
  "/review",
  auth,
  validateInput(Interface.CreateReviewInterface),
  ReviewController.createReview
); //ok
router.patch(
  "/review",
  auth,
  validateInput(Interface.UpdateReviewInterface),
  ReviewController.modifyReview
); //ok
router.delete(
  "/review",
  auth,
  validateInput(Interface.DeleteReviewInterface),
  ReviewController.deleteReview
); //ok

export default router;
