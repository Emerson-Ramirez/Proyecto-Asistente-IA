import { Schema, model, Document } from 'mongoose';

export interface IUsuario extends Document {
  email: string;
  password: string;
}

const usuarioSchema = new Schema<IUsuario>({
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    }
});

export default model<IUsuario>('Usuario', usuarioSchema);