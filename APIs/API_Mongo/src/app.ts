import express from 'express';
import cors from 'cors';
import { conectarDB } from './config/db';
import usuarioRoutes from './routes/usuarioRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
conectarDB();

app.use(cors());
app.use(express.json());

app.use('/api', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});