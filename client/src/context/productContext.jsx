import { createContext, useContext, useState } from "react";
import { createProductRequest, getProductsRequest } from '../api/products'
const ProductContext = createContext();
export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useAuth must be used within an ProductProvider")
    }
    return context;
}
export function ProductProvider({ children }) {

    const [product, setProduct] = useState([]);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await getProductsRequest();
            setProducts(res.data);
            console.log(res)
        } catch (error) {
            console.error(error);
        }
    }
    const createProduct = async (product) => {
        try {
            const res = await createProductRequest(product);
            console.log(res)
        } catch (error) {
            console.error(error);
        }
    }
    const delateProduct = async (id) => {
        try {
            const res = await delateProduct(id);
            console.log(res + "se ha eliminado el producto correctamente");
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <ProductContext.Provider value={{
            product,
            products,
            createProduct,
            getProducts,
            delateProduct
        }}>
            {children}
        </ProductContext.Provider>
    );
}