import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useProduct } from '../../context/productContext'
import IngredientsForm from '../../components/IngredientsForm';
import { FaHamburger } from 'react-icons/fa'
const ProductsFormPage = () => {
  const { register, handleSubmit } = useForm();
  const { createProduct } = useProduct();

  const onSubmit = handleSubmit((data) => {
    createProduct(data);
  });


  return (
    <div className='pt-40 lg:pt-14'>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-brownPrimary rounded-full flex flex-shrink-0 justify-center items-center text-red-300 text-2xl font-mono">
                  <FaHamburger />
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Crea un nuevo Producto</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    Completa el siguiente formulario para agregar un nuevo producto.</p>
                </div>
              </div>
              <form onSubmit={onSubmit}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose">Producto</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Producto"
                        {...register('title')}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Descripcion</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Descripcion"
                        {...register('description')}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Url Imagen</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Url Imagen"
                        {...register('urlImage')}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Precio:</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Precio"
                        {...register('price')}

                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Cantidad:</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Cantidad"
                        {...register('quantity')}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="leading-loose">Categoria:</label>
                      <select name="select" {...register('category')}>
                        <option value="Hamburguesas">Hamburguesas</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Papas Fritas">Papas Fritas</option>
                        <option value="Hot Dogs">Hot Dogs</option>
                        <option value="Pollo">Pollo</option>
                        <option value="Tacos y Burritos">Tacos y Burritos</option>
                        <option value="Sandwiches">Sandwiches</option>
                      </select>


                    </div>
                    <div>
                      <label className="leading-loose">Ingredientes:</label>
                      <IngredientsForm register={register} />
                    </div>

                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    <button className="bg-blue-800 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductsFormPage
