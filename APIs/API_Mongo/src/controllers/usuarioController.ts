import { Request, Response } from 'express';
import Usuario from '../models/Usuarios';

export const autentificacion = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  try {
    const user = await Usuario.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    if (!(password === user.password)) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
    res.status(200).json({ message: 'Login exitoso', user });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
    
  try {
    const users = await Usuario.find();
    if (!users) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    res.status(200).json({ message: 'Login exitoso', users });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
}