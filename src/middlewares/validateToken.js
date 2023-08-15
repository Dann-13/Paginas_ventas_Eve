//los middlewars son funciones que se van a ejecutar antes de que llegen a una ruta
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';
export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "No token Autorizacion denegada" });
    }
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: "Token no valido" });
        req.user = user; //guardamos en req.user para que las demas rutas puedan usar al usuario
        next();
    });
   
}