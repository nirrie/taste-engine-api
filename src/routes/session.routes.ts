import { Router } from "express";
import {
  createSessionController,
  getSessionController
} from "../controllers/session.controller";
import { getSessionDetailsController } from "../controllers/session.controller";

const router = Router();

router.post("/", createSessionController);
router.get("/:sessionId", getSessionController);
router.get("/:sessionId/details", getSessionDetailsController);

export default router;
