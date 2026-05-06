import { Router } from "express";
import { submitChoiceController } from "../controllers/choice.controller";

const router = Router();

router.post("/", submitChoiceController);

export default router;
