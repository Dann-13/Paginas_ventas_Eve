import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
    const products = await Product.find().limit(8);
    res.json(products);
};
export const createProduct = async (req, res) => {
    try {
        const { title, description, urlImage, price, category, quantity, ingredients, date } = req.body;

        // Crea un nuevo producto con los datos recibidos
        const newProduct = new Product({
            title,
            description,
            urlImage,
            price,
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
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'producto no encontrado' });
        res.json(product);
    }catch(error){
        console.log(error)
    }

    
};

export const deleteProduct = async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct)
        return res.status(404).json({ message: "Product not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
export const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true //para que me de el dato nuevo no el viejo
    });
    if (!product) return res.status(404).json;
    res.json(product);
};