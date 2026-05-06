import { Request, Response } from "express";
import { createSession, getSession } from "../services/session.service";
import { getSessionDetails } from "../services/session.service";

export async function getSessionDetailsController(req: Request, res: Response) {
  const rawSessionId = req.params.sessionId;

  if (!rawSessionId || Array.isArray(rawSessionId)) {
    return res.status(400).json({
      message: "Invalid sessionId"
    });
  }

  const result = await getSessionDetails(rawSessionId);

  if (!result) {
    return res.status(404).json({
      message: "Session not found"
    });
  }

  return res.json(result);
}

export async function createSessionController(_req: Request, res: Response) {
  const session = await createSession();

  res.status(201).json({
    message: "Session created",
    sessionId: session.id,
    profile: session.profile
  });
}

export async function getSessionController(req: Request, res: Response) {
  const rawSessionId = req.params.sessionId;

  if (!rawSessionId || Array.isArray(rawSessionId)) {
    return res.status(400).json({
      message: "Invalid sessionId"
    });
  }

  const session = await getSession(rawSessionId);

  if (!session) {
    return res.status(404).json({
      message: "Session not found"
    });
  }

  return res.json(session);
}
