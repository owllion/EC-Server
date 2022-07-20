import express from "express";
import * as ReviewController from "../controller/review.controller";
import auth from "../middleware/auth.middleware";

const router = express.Router();

router.post("/create/review", ReviewController.createReview);
router.post("/update/review", ReviewController.modifyReview);

export default router;
