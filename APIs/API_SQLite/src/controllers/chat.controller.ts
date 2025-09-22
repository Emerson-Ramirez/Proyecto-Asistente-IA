import { Request, Response } from "express";
import { ChatService } from "../../../../backend/src/services/chat-service";

const chatService = new ChatService();

export async function askController(req: Request, res: Response) {
  try {
    const { query } = req.body;
    const response = await chatService.ask(query);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Error en la API" });
  }
}