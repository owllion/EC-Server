import express from "express";
import * as UserController from "../controller/user.controller";
const router = express.Router();

router.get("/test", (_, res) => res.sendStatus(200));
router.post("/fp", UserController.forgotPassword);
export default router;
