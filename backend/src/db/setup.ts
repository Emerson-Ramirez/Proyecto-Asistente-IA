import fs from "fs";
import path from "path";
import Database from "better-sqlite3";
import { generarEmbedding } from "../services/embeddings";

// 📂 Carpeta donde estarán las bases
const dbDir = path.join(__dirname);
const files = ["teoria.db", "desafios.db", "errores.db", "comandos.db"];

// 🗑️ Eliminar DB viejas
for (const file of files) {
  const filePath = path.join(dbDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`🗑️ Eliminada: ${file}`);
  }
}

// 📌 Datos iniciales
const sampleData: Record<string, { question: string; answer: string }[]> = {
  "teoria.db": [
    { question: "¿Qué es Angular 20?", answer: "Angular 20 es la versión más reciente del framework de desarrollo frontend de Google basado en TypeScript, que introduce mejoras en rendimiento, herramientas modernas de compilación y soporte de standalone components." },
    { question: "¿Qué es un componente?", answer: "Un componente es una clase con lógica y un template HTML." },
    { question: "¿Qué son los standalone components?", answer: "Son componentes que no requieren declararse en NgModules. Facilitan la modularidad y simplifican la estructura del proyecto en Angular 20." },
    { question: "¿Qué es el cambio por Signals?", answer: "Signals es un nuevo sistema reactivo introducido en Angular que permite manejar el estado de forma más eficiente, reemplazando parcialmente a RxJS en escenarios simples." },
  ],
  "desafios.db": [
    { question: "crear un componente", answer: "Usa `ng generate component nombre` y decláralo en el módulo." },
    { question: "crear un servicio", answer: "Ejecuta `ng generate service nombre` y luego inyéctalo donde lo uses." },
    { question: "Crear un formulario reactivo con validaciones", answer: `Pasos:
    1. Importar ReactiveFormsModule en el componente.
    2. Crear un FormGroup en el constructor usando FormBuilder.
    3. Definir validaciones como required, minLength, pattern.
    4. En el template, usar [formGroup] y formControlName.
    5. Mostrar mensajes de error con *ngIf para cada validación.` },
    { question: "Crear un interceptor HTTP", answer: `Pasos:
    1. Crear una clase que implemente HttpInterceptor.
    2. Implementar el método intercept(req, next).
    3. Modificar headers o manejar errores en el request.
    4. Registrarlo en providers con provideHttpClient(withInterceptors(...)).` },
  ],
  "errores.db": [
    { question: "error NG0100", answer: "Se produce por un cambio detectado tras la verificación de Angular." },
    { question: "error al compilar", answer: "Revisa imports y la versión de Angular CLI." },
    { question: "Error: Cannot find module '@angular/core'", answer: "Se debe a que Angular no está instalado correctamente. Solución: ejecuta `npm install` en la raíz del proyecto y confirma que la versión de Angular es la correcta." },
    { question: "Error NullInjectorError: No provider for Service", answer: "Significa que olvidaste proporcionar el servicio. Solución: añade el decorador `@Injectable({ providedIn: 'root' })` o provee el servicio manualmente en el bootstrapApplication." },
  ],
  "comandos.db": [
    { question: "ng serve", answer: "Levanta el servidor de desarrollo." },
    { question: "ng build", answer: "Compila la app para producción." },
    { question: "Comando para generar un servicio en Angular", answer: "ng generate service servicios/mi-servicio" },
  ],
};

// 🚀 Crear bases y poblarlas
(async () => {
  for (const file of files) {
    const filePath = path.join(dbDir, file);
    const db = new Database(filePath);

    db.prepare(
      "CREATE TABLE IF NOT EXISTS qa (id INTEGER PRIMARY KEY AUTOINCREMENT, question TEXT, answer TEXT, embedding TEXT)"
    ).run();

    const insert = db.prepare("INSERT INTO qa (question, answer, embedding) VALUES (?, ?, ?)");

    for (const item of sampleData[file]) {
      const emb = await generarEmbedding(item.question);
      insert.run(item.question, item.answer, JSON.stringify(emb));
    }

    db.close();
    console.log(`✅ Base de datos creada: ${file}`);
  }

  console.log("🚀 Todas las bases listas para usar en la API.");
})();