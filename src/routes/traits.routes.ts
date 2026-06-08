import { Router } from "express";
import { traits } from "../domain/traits";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    count: traits.length,
    data: traits,
  });
});

router.get("/:key", (req, res) => {
  const trait = traits.find((trait) => trait === req.params.key);
  if (!trait) {
    return res.status(404).json({ error: "Trait not found" });
  }
  res.json({
    count: 1,
    data: trait,
  });
});

export default router;