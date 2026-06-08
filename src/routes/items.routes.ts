import { items } from "../domain/items";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        count: items.length,
        data: items,
    });
});

router.get("/:id", (req, res) => {
    const item = items.find(i => i.id === req.params.id);
    if (!item) {
        return res.status(404).json({ error: "Item not found" });
    }
    res.json({
        data: item,
    });
});


export default router;