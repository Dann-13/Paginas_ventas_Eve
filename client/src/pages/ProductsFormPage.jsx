import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useProduct } from '../context/productContext'
const ProductsFormPage = () => {
  const { register, handleSubmit, control } = useForm();
  const { createProduct } = useProduct();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const onSubmit = handleSubmit((data) => {
    createProduct(data);
  });

  const handleAgregarCampo = () => {
    append({ name: '', amount: '' });
  };

  const handleQuitarCampo = (index) => {
    remove(index);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Crea un nuevo Producto</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
                      <select name="select"
                        {...register('category')}>
                        <option value="camisas">Camisas</option>
                        <option value="chaquetas">Chaquetas</option>
                        <option value="pantalones">Pantalones</option>
                      </select >

                    </div>
                    <div className="flex justify-center items-center">
                      <div className="bg-white p-2 w-full rounded shadow-md">
                        {fields.map((field, index) => (
                          <div key={field.id} className="mb-4">
                            <label htmlFor={`ingredients[${index}].name`} className="block mb-2">
                              Nombre:
                            </label>
                            <input
                              type="text"
                              id={`ingredients[${index}].name`}
                              name={`ingredients[${index}].name`}
                              placeholder="Ingrese nombre"
                              className="w-full p-2 mb-2 border rounded"
                              {...register(`ingredients[${index}].name`)}
                            />

                            <label htmlFor={`ingredients[${index}].amount`} className="block mb-2">
                              Monto:
                            </label>
                            <input
                              type="text"
                              id={`ingredients[${index}].amount`}
                              name={`ingredients[${index}].amount`}
                              placeholder="Ingrese monto"
                              className="w-full p-2 mb-2 border rounded"
                              {...register(`ingredients[${index}].amount`)}
                            />

                            <button
                              type="button"
                              onClick={() => handleQuitarCampo(index)}
                              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                              Quitar Campo
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={handleAgregarCampo}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                          Agregar Campo
                        </button>
                      </div>
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
