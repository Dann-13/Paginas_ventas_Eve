import React, { useState } from 'react'
import { useCart } from '../../../context/CartContext';
import Cart from '../../cart/Cart';

function CartOprions() {
    const { cart, setShowCart, showCart } = useCart();
    console.log(showCart)
    return (
        <div>
            {/* Botón para abrir o cerrar el carrito */}
            <button
                onClick={() => {
                    setShowCart(true);
                }}
                className=" top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                "Abrir Carrito" ({cart.length})
            </button>

            {/* Renderiza el carrito si está abierto */}
            {showCart && <Cart />}
        </div>
    )
}

export default CartOprions