import express from "express";
import * as ReviewController from "../controller/review.controller.js";
import auth from "../middleware/auth.middleware.js";
import validateInput from "../middleware/validate.middleware.js";
import * as Interface from "../schema/index.js";

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
