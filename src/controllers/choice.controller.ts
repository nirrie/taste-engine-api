import { Request, Response } from "express";
import { processChoice } from "../services/choice.service";

export async function submitChoiceController(req: Request, res: Response) {
  const { sessionId, selectedItemId } = req.body;

  if (!sessionId || !selectedItemId) {
    return res.status(400).json({
      message: "sessionId and selectedItemId are required"
    });
  }

  try {
    const updatedSession = processChoice(sessionId, selectedItemId);

    return res.status(201).json({
      message: "Choice received",
      session: updatedSession
    });
  } catch (error) {
    return res.status(404).json({
      message: error instanceof Error ? error.message : "Unknown error"
    });
  }
}
