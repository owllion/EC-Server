import express from "express";
import * as ReviewController from "../controller/review.controller";
import auth from "../middleware/auth.middleware";

const router = express.Router();

router.use(auth);
router.post("/review/create", ReviewController.createReview); //ok
router.patch("/review/update", ReviewController.modifyReview); //ok
router.delete("/review/delete", ReviewController.deleteReview); //ok

export default router;
