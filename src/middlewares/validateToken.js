//los middlewars son funciones que se van a ejecutar antes de que llegen a una ruta
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "No token, autorización denegada" });
    }

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: "Token no válido" });

        req.user = user; // Guardamos en req.user para que las demás rutas puedan acceder al usuario
        console.log(req.user.admin)
        // Verificar si el usuario es administrador
        if (req.user.admin) {
            next(); // Continuar si es un administrador
        } else {
            res.status(403).json({ message: "Acceso denegado: No eres un administrador" });
        }
    });
}

// Nuevo middleware para autenticar usuarios sin verificar si son administradores
export const authUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "No token, autorización denegada" });
    }

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: "Token no válido" });

        req.user = user; // Guardamos en req.user para que las demás rutas puedan acceder al usuario
        console.log(req.user);
        next(); // Continuar con la siguiente función en la cadena de middlewares
    });
};
