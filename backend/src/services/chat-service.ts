import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import { generarEmbedding } from "./embeddings";

function cosineSimilarity(a: number[], b: number[]): number {
  const dot = a.reduce((sum, v, i) => sum + v * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, v) => sum + v * v, 0));
  const normB = Math.sqrt(b.reduce((sum, v) => sum + v * v, 0));
  return dot / (normA * normB);
}

export class ChatService {
  async ask(query: string): Promise<{ answer: string; question: string; component: string }> {
    const dbFiles = ["teoria.db", "desafios.db", "errores.db", "comandos.db"];

    const q_vector = await generarEmbedding(query);

    let mejor: any = null;
    let mejorScore = -1;
    let dbName = "";

    for (const file of dbFiles) {
      // 🔹 Ruta absoluta a la base de datos
      const dbPath = path.resolve(__dirname, "../db", file);

      // 🔹 Abrir la base de datos
      const db = await open({
        filename: dbPath,
        driver: sqlite3.Database
      });

      // 🔹 Sentencia busqueda
      const rows = await db.all("SELECT question, answer, embedding FROM qa");

      for (const row of rows) {
        const emb = JSON.parse(row.embedding);
        const sim = cosineSimilarity(q_vector, emb);
        if (sim > mejorScore) {
          mejorScore = sim;
          mejor = row;
          dbName = file;
        }
      }

      await db.close();
    }

    const UMBRAL = 0.7; 

    if (mejor && mejorScore >= UMBRAL) {
      return {
        answer: mejor.answer,
        question: mejor.question,
        component: dbName.replace(".db", "")
      };
    } else {
      return {
        answer: "",
        question: "",
        component: ""
      };
    }
   /*return {
      answer: mejor ? mejor.answer : "No encontré una respuesta exacta.",
      question: mejor ? mejor.question: "",
      component: dbName.replace(".db", "")
    };*/
  }
}