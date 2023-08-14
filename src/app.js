import express from "express";
import bodyParser from "body-parser"; // Importa el módulo body-parser
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js';
const app = express();

app.use(morgan('dev'));

// Utiliza directamente bodyParser.json() y bodyParser.urlencoded()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', authRoutes);
export default app;