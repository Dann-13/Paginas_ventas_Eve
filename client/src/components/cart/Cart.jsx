import React from "react";
import { useCart } from "../../context/CartContext";
import { Card, List, ListItem, Title } from '@tremor/react';

function Cart() {

    const cities = [
        {
          city: 'Athens',
          rating: '2 open PR',
        },
        {
          city: 'Lucerne',
          rating: '1 open PR',
        },
        {
          city: 'Zurich',
          rating: '0 open PR',
        },
        {
          city: 'Vienna',
          rating: '1 open PR',
        },
        {
          city: 'Lissbon',
          rating: '0 open PR',
        },
      ];
    const { cart, removeFromCart, clearCart, showCart,
        setShowCart } = useCart();

    return (
        <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-md overflow-y-auto z-50 p-4">
            <div>
                <h2 className="text-lg font-semibold">Carrito de Compras</h2>
                {cart.length === 0 ? (
                    <div className="mt-2 text-gray-600">El carrito está vacío
                        <Card className="mx-auto max-w-md">
                            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Tremor's Hometowns</h3>
                            <List className="mt-2">
                                {cities.map((item) => (
                                    <ListItem key={item.city}>
                                        <span>{item.city}</span>
                                        <span>{item.rating}</span>
                                    </ListItem>
                                ))}
                            </List>
                        </Card>

                    </div>

                ) : (
                    <ul className="mt-2">
                        {cart.map((product) => (
                            <li key={product.id} className="flex justify-between items-center py-2">
                                <span>{product.name} - ${product.price}</span>
                                <button
                                    onClick={() => removeFromCart(product.id)}
                                    className="text-sm text-red-600 hover:text-red-800"
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                <button
                    onClick={clearCart}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                >
                    Vaciar Carrito
                </button>
                <button
                    onClick={() => setShowCart(false)}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Cerrar Carrito
                </button>

            </div>
        </div>
    );
}

export default Cart;
