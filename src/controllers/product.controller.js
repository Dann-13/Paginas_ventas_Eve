import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};
export const createProduct = async (req, res) => {
    try {
        const { title, description, urlImage, price, category, quantity, ingredients, date } = req.body;

        // Convertir el precio a número y formatearlo como cadena
        const priceNumber = parseFloat(price.replace('.', '').replace(',', '.'));
        const priceString = Intl.NumberFormat().format(priceNumber);

        // Crea un nuevo producto con los datos recibidos
        const newProduct = new Product({
            title,
            description,
            urlImage,
            price: priceNumber,
            priceString,
            category,
            quantity,
            ingredients,
            date,
        });

        // Guarda el producto en la base de datos
        const savedProduct = await newProduct.save();

        // Responde con el producto guardado
        res.json(savedProduct);
    } catch (error) {
        // Maneja los errores si ocurren
        console.error(error);
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};
export const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'producto no encontrado' });
    res.json(product);
};

export const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'producto no encontrado' });
    res.json(product);
};
export const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true //para que me de el dato nuevo no el viejo
    });
    if (!product) return res.status(404).json;
    res.json(product);
};