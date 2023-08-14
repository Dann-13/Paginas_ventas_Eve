import app from './app.js';
import { connectDB } from './db.js';

connectDB();
app.listen(3000);
console.log("Escuhando en: http://localhost:" + 3000);