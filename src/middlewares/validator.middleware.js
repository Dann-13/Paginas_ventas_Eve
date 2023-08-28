export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        //solo necesitamos el mesaje, para ello recorremos errors para obtenerlo
        return res.status(400).json({ error: error.errors.map(error => error.message) });
    }
}