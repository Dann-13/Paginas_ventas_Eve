import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};
export const createProduct = async (req, res) => {
    const {title, description, date} = req.body;
    const newProduct = new Product ({
        title,
        description,
        date
    });
    const savedProduct =  await newProduct.save();
    res.json(savedProduct);
};
export const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({message: 'producto no encontrado'});
    res.json(product);
};

export const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({message: 'producto no encontrado'});
    res.json(product);
};
export const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true //para que me de el dato nuevo no el viejo
    });
    if (!product) return res.status(404).json;
    res.json(product);
};