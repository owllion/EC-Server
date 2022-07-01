import express from "express";

const router = express.Router();

router.get("/test", (_, res) => res.sendStatus(200));

export default router;
