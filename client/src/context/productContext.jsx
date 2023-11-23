import { createContext, useContext, useState } from "react";
import {createProductRequest} from '../api/products'
const ProductContext = createContext();
export const  useProduct = () => {
    const context = useContext(ProductContext);
    if (!context){
        throw new Error("useAuth must be used within an ProductProvider")
    }
    return context;
}
export function ProductProvider({children}){

    const [product, setProducts] = useState([]);
    const createProduct = async(product) => {
        const res = await createProductRequest(product)
        console.log(res)
    }
    return(
        <ProductContext.Provider value={{
            product,
            createProduct
        }}>
            {children}
        </ProductContext.Provider>
    );
}