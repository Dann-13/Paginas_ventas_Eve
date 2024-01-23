import React from 'react';
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext'
/**
 * 
 * @param {*} param0 
 * @returns 
 */
function ProductCard({ product }) {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated)
    return (
        <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <Link key={product.id} to={`/product/${product.slug}`}
            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="object-cover" src={product.urlImage} />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
            </Link>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900 font-veneer font-[500]">{product.title}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                        <span className="text-sm text-slate-900 line-through">$699</span>
                    </p>
                    <div className="flex items-center">
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                    </div>
                </div>
                <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    
                    Add to cart</a>
            </div>
        </div>

    );
}

export default ProductCard;
