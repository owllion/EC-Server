import express from "express";
import * as ReviewController from "../controller/review.controller.js";
import auth from "../middleware/auth.middleware.js";
import validateInput from "../middleware/validate.middleware.js";
import * as Interface from "../schema/index.js";
const router = express.Router();
router.post("/review", auth, validateInput(Interface.CreateReviewInterface), ReviewController.createReview);
router.patch("/review", auth, validateInput(Interface.UpdateReviewInterface), ReviewController.modifyReview);
router.delete("/review", auth, validateInput(Interface.DeleteReviewInterface), ReviewController.deleteReview);
export default router;
//# sourceMappingURL=review.route.js.map