import { Router } from "express";

const router = Router();
router.get("/", (_req, res) => {
  res.json({ status: "healthy", service: "taste-api" });
});

export default router;