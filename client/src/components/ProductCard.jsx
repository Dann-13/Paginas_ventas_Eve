import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product }) {
    return (
        <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="object-cover" src={product.urlImage} alt="product image" />
            </a>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900 font-veneer">{product.title}</h5>
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
                    <div className='flex gap-2 items-center'>
                        <FaShoppingCart />
                        <p>Add to cart</p> 
                    </div>

                </a>
            </div>
        </div>

    );
}

export default ProductCard;
