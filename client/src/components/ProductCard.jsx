import React from 'react';

function ProductCard({ product, isAdmin }) {
    return (
            <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover" src={product.urlImage} alt="product image" />
                </a>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span className="text-3xl font-bold text-slate-900">${product.priceString}</span>
                        </p>
                    </div>
                    <a
                        href="#"
                        className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            {/* Icono de carrito */}
                        </svg>
                        Add to cart
                    </a>
                    {isAdmin.isAdmin && (
                        <div className="flex justify-between mt-4">
                            <button className="bg-red-400 rounded-lg p-2">Eliminar</button>
                            <button className="bg-yellow-400 rounded-lg p-2">Editar</button>
                        </div>
                    )}
                </div>
            </div>
        
    );
}

export default ProductCard;
