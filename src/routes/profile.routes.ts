import { Router, Request, Response } from "express";
import { analyzeProfile } from "../services/profile.service";

const router = Router();

router.post("/analyze", (req: Request, res: Response) => {
    const { selectedItemIds } = req.body;

    if (!Array.isArray(selectedItemIds)) {
        return res.status(400).json({
            error: "selectedItemIds must be an array",
        });
    }

    if (selectedItemIds.length === 0) {
        return res.status(400).json({
            error: "selectedItemIds cannot be empty",
        });
    }

    const hasInvalidValues = selectedItemIds.some(
        (id) => typeof id !== "string"
    );

    if (hasInvalidValues) {
        return res.status(400).json({
            error: "selectedItemIds must only contain strings",
        });
    }

    const result = analyzeProfile(selectedItemIds);

    if (!result) {
        return res.status(400).json({
            error: "No valid items selected",
        });
    }

    res.json(result);
});

export default router;