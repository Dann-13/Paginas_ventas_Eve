import { createContext, useContext, useState } from "react";
import { createProductRequest, getProductsRequest, deleteProductRequest, getProductRequest, updateProductRequest, getProductRequestId } from '../api/products'
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
        } catch (error) {
            console.error(error);
        }
    }
    const createProduct = async (product) => {
        try {
            await createProductRequest(product);
        } catch (error) {
            console.error(error);
        }
    }
    const deleteProduct = async (id) => {
        try {
            const res = await deleteProductRequest(id);
            if (res && res.status === 204) {
                setProducts(products.filter(product => product._id !== id));
                console.log("Se ha eliminado el producto correctamente");
            } else {
                console.log("No se pudo eliminar el producto");
            }
        } catch (error) {
            if (error.response) {
                // El servidor respondió con un código de estado fuera del rango 2xx
                console.error("Error de respuesta del servidor:", error.response.data);
            } else if (error.request) {
                // La solicitud fue realizada pero no se recibió una respuesta
                console.error("No se recibió respuesta del servidor");
            } else {
                // Ocurrió un error durante la configuración de la solicitud
                console.error("Error durante la configuración de la solicitud:", error.message);
            }
        }
    }
    //sirve para buscar el producto con el id, en este caso quien lo usa es el admin cuando va a actualizar los datos de un producto
    const getProductId = async (id) => {
        try {
            const res = await getProductRequestId(id);
            console.log(res.data)
            if (res.data) {
                return res.data;
            } else {
                console.warn('Producto no encontrado');
                // Puedes manejar el caso en que el producto no se encuentre, por ejemplo, lanzando un error o devolviendo un valor específico.
            }
        } catch (error) {
            console.error('Error al obtener el producto por ID:', error);
            // Puedes manejar el error según tus necesidades, como mostrando un mensaje de error o redirigiendo a una página de error.
        }
    };

    const getProduct = async (slug) => {
        try {

            const res = await getProductRequest(slug);
            setProduct(res.data);
        } catch (error) {
            console.log(error)

        }
    }

    const updateProduct = async (id, product) => {
        try {
            await updateProductRequest(id, product);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProductContext.Provider value={{
            product,
            products,
            createProduct,
            getProducts,
            deleteProduct,
            getProduct,
            updateProduct,
            getProductId
        }}>
            {children}
        </ProductContext.Provider>
    );
}