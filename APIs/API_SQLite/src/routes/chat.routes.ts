import { Router } from "express";
import { askController } from "../controllers/chat.controller";

const router = Router();
router.post("/ask", askController);

export default router;