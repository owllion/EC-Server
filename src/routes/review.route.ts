import express from "express";
import * as ReviewController from "../controller/review.controller";
import auth from "../middleware/auth.middleware";
import validateInput from "../middleware/validate.middleware";
import * as Interface from "../schema";

const router = express.Router();

router.use(auth);
router.post(
  "/review/create",
  validateInput(Interface.CreateReviewInterface),
  ReviewController.createReview
); //ok
router.patch(
  "/review/update",
  validateInput(Interface.UpdateReviewInterface),
  ReviewController.modifyReview
); //ok
router.delete(
  "/review/delete",
  validateInput(Interface.DeleteReviewInterface),
  ReviewController.deleteReview
); //ok

export default router;
