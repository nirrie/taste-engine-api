import { Request, Response } from "express";
import { getComparisonForSession } from "../services/comparison.service";
import { getSession } from "../services/session.service";

export async function getComparisonController(req: Request, res: Response) {
  const rawSessionId = req.query.sessionId;

  if (typeof rawSessionId !== "string") {
    return res.status(400).json({
      message: "sessionId query parameter is required"
    });
  }

  const session = await getSession(rawSessionId);

  if (!session) {
    return res.status(404).json({
      message: "Session not found"
    });
  }

  const comparison = await getComparisonForSession();

  if (!comparison) {
    return res.status(404).json({
      message: "No more comparisons available"
    });
  }

  return res.json(comparison);
}
 
