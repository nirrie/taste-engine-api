import { Router } from "express";
import { getComparisonController } from "../controllers/comparison.controller";

const router = Router();

router.get("/", getComparisonController);

export default router;
