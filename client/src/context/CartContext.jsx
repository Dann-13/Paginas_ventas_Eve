import { createContext, useContext, useState } from "react";

// Creamos el contexto para el carrito
const CartContext = createContext();

// Hook personalizado para utilizar el contexto del carrito
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe ser utilizado dentro de un CartProvider");
    }
    return context;
};

// Componente proveedor del contexto del carrito
export function CartProvider({ children }) {
    // Estado para almacenar los productos del carrito
    const [cart, setCart] = useState([]);
    // Estado para controlar la visibilidad del carrito
    const [showCart, setShowCart] = useState(false);

    // Función para agregar un producto al carrito
    const addToCart = (product) => {
        
        setCart([...cart, product]);
        const checkProductInCart = cart.find((item) => item._id === product._id);
        console.log(checkProductInCart)
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    };

    // Función para vaciar completamente el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Proporcionamos el contexto y las funciones relacionadas al carrito a los componentes hijos
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            showCart,
            setShowCart
        }}>
            {children}
        </CartContext.Provider>
    );
}
