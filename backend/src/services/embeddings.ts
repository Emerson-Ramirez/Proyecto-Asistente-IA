import { pipeline } from "@xenova/transformers";

let embedder: any = null;

export async function generarEmbedding(texto: string): Promise<number[]> {
  if (!embedder) {
    // Cargamos el modelo una sola vez
    embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }
  const output = await embedder(texto, {
    pooling: "mean", // convierte tokens → vector único
    normalize: true, // normaliza la longitud del vector
  });
  return Array.from(output.data); // vector decimal listo
}
