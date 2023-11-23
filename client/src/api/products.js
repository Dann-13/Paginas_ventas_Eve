import axios from './axios'

export const getProductsRequest = () => axios.get('/products');

export const getProductRequest = (id) => axios.get(`products/${id}`);
export const createProductRequest = (product) => axios.post('/product', product);
export const updateProductRequest = (product) => axios.put(`products/${product._id}`, product);
export const delateProductRequest = (id) => axios.delete(`products/${id}`);