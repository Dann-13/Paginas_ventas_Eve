import axios from './axios'

export const getProductsRequest = () => axios.get('/products');

export const getProductRequest = (slug) => axios.get(`/product/${slug}`);
export const createProductRequest = (product) => axios.post('/product', product);
export const updateProductRequest = (id, product) => axios.put(`product/${id}`, product);
export const deleteProductRequest = (id) => axios.delete(`product/${id}`);