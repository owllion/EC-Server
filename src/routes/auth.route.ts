import express from "express";

const router = express.Router();

router.get("/auth", (_, res) => res.sendStatus(200));

export default router;
