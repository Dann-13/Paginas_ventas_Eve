import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useAuth must be used within an ProductProvider")
    }
    return context;


}

// Crear un proveedor para el carrito de compras
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{
            cart, addToCart, removeFromCart, clearCart, showCart, setShowCart 
        }}>
            {children}
        </CartContext.Provider>
    );
}