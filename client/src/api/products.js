import axios from './axios'

export const getProductsRequest = () => axios.get('/products');
//ruta exxlusiva global que facilita la traida de datos en este caso por el slug
export const getProductRequest = (slug) => axios.get(`/product/${slug}`);
//ruta exclusiva del admin para traer datos del producto por id
export const getProductRequestId = (id) => axios.get(`/productId/${id}`);

export const createProductRequest = (product) => axios.post('/product', product);
export const updateProductRequest = (id, product) => axios.put(`productUpdate/${id}`, product);
export const deleteProductRequest = (id) => axios.delete(`product/${id}`);