import React from "react";
import { useCart } from "../../context/CartContext";
import { RiStoreLine } from '@remixicon/react'
function Cart() {

    const { cart, removeFromCart, clearCart, showCart,
        setShowCart } = useCart();
    cart.map((product) => (
        console.log(product)
    ))

    return (
        <div className="fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-50 z-50 transition-all duration-1000 ease-in-out">
            <div className="h-full w-96 bg-white float-right p-4 relative">
                <h2 className="text-xl font-semibold py-4">Tu Carrito</h2>
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center">
                        <h3>Su carrito de compras esta vacio</h3>
                        <RiStoreLine size={150} />
                        <button
                            onClick={() => setShowCart(false)}
                            className="mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-hover-Primary"
                        >
                            Cerrar Carrito
                        </button>
                    </div>
                ) : (
                    <div>
                        <ul className="mt-2">
                            {cart.map((product) => (
                                <li key={product._id} className="flex justify-between items-center py-2">
                                    <span>{product.title} - ${product.price}</span>
                                    <button
                                        onClick={() => removeFromCart(product.id)}
                                        className="text-sm text-red-600 hover:text-red-800"
                                    >
                                        Eliminar
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setShowCart(false)}
                            className="mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-hover-Primary"
                        >
                            Cerrar Carrito
                        </button>

                    </div>


                )}
            </div>
        </div>
    );
}

export default Cart;
