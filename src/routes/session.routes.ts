import { Router, Request, Response } from "express";
import {
  createSession,
  getSession,
  getSessionWithProfile,
  selectItemForSession,
} from "../services/session.service";


const router = Router();

router.post("/:sessionId/select", async (req: Request, res: Response) => {
  const sessionIdParam = req.params.sessionId;
  const sessionId = Array.isArray(sessionIdParam) ? sessionIdParam[0] : sessionIdParam;
  const { itemId } = req.body;

  if (!sessionId) {
    return res.status(400).json({ error: "Invalid session id" });
  }

  if (typeof itemId !== "string") {
    return res.status(400).json({
      error: "itemId must be a string",
    });
  }

  try {
    const result = await selectItemForSession(sessionId, itemId);

    if (!result) {
      return res.status(404).json({
        error: "Session not found",
      });
    }

    res.json({
      data: result,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "ITEM_NOT_FOUND") {
      return res.status(404).json({
        error: "Item not found",
      });
    }

    throw error;
  }
});

router.post("/", async (_req: Request, res: Response) => {
  const session = await createSession();

  res.status(201).json({
    data: session,
  });
});

router.get("/:sessionId", async (req: Request, res: Response) => {
  const sessionIdParam = req.params.sessionId;
  const sessionId = Array.isArray(sessionIdParam) ? sessionIdParam[0] : sessionIdParam;

  if (!sessionId) {
    return res.status(400).json({ error: "Invalid session id" });
  }

  const session = await getSessionWithProfile(sessionId);

  if (!session) {
    return res.status(404).json({
      error: "Session not found",
    });
  }

  res.json({
    data: session,
  });
});

export default router;
