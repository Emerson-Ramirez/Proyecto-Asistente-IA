import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", chatRoutes);

// Iniciar servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 API corriendo en http://localhost:${PORT}`);
});