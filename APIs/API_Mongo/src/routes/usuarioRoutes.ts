import { Router } from 'express';
import { autentificacion, getAllUsers } from '../controllers/usuarioController';

const router = Router();
router.post('/login', autentificacion);
router.get('/', getAllUsers);

export default router;