import React, { useState } from 'react'
import { useCart } from '../../../context/CartContext';
import Cart from '../../cart/Cart';
import {RiShoppingCartFill} from '@remixicon/react'
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
                className=" top-4 right-4 text-white px-4 py-2 "
            >
                <RiShoppingCartFill />
            </button>

            {/* Renderiza el carrito si está abierto */}
            {showCart && <Cart />}
        </div>
    )
}

export default CartOprions