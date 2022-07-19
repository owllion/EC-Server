import express from "express";
import * as UserController from "../controller/user.controller";
const router = express.Router();

router.post("/forgot-password", UserController.forgotPassword);
router.post("/login", UserController.login);
router.post("/register", UserController.register);
export default router;
