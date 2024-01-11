import React from 'react'
import { useProduct } from '../../context/productContext'
import { Link } from 'react-router-dom';

function ProductDetails({ product }) {
    const {deleteProduct} = useProduct();
    return (

        <div>
            <div className="relative flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover" src={product.urlImage} alt="product image" />
                </a>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900 font-veneer">{product.title}</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                        </p>
                    </div>
                    <div className='py-3'>
                        <p>
                            <span className='font-medium'>
                                {product.description}
                            </span>
                        </p>
                    </div>

                    <div className='flex justify-between gap-2 items-center'>
                        <Link to={`/product/${product._id}`} className='bg-green-400 rounded-lg py-2 px-3'  >Editar</Link>
                        <button className='bg-red-400 rounded-lg py-2 px-3'
                            onClick={
                                () => {
                                    deleteProduct(product._id);
                                }
                            }> Eliminar</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProductDetails
