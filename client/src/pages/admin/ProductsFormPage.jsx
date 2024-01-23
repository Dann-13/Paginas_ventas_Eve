import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useProduct } from '../../context/productContext'
import IngredientsForm from '../../components/IngredientsForm';
import { FaHamburger } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
const ProductsFormPage = () => {
  // Extraer funciones útiles de react-hook-form y del contexto de productos
  const { register, handleSubmit, setValue } = useForm();
  const [dataLoaded, setDataLoaded] = useState(false);
  const { createProduct, getProductId, updateProduct } = useProduct();
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    async function loadProduct() {
      try {
        if (params.id) {
          const product = await getProductId(params.id);

          // Verifica si product está definido antes de intentar acceder a sus propiedades
          if (product) {
            setValue('title', product.title);
            setValue('description', product.description);
            setValue('urlImage', product.urlImage);
            setValue('price', product.price);
            setValue('quantity', product.quantity);
            setValue('category', product.category);
            setValue('ingredients', product.ingredients);
            console.log("esras aqui")
            setDataLoaded(true);
          } else {
            console.warn('Producto no encontrado');
            
            // Puedes manejar el caso en que el producto no se encuentre, por ejemplo, redirigiendo a una página de error.
          }
        }else{
           //Aclarando: cambiamos el estado de carga para que el formulario se muestre, en este caso es para añadir un poducto
          setDataLoaded(true)
        }
      } catch (error) {
        // Manejo de errores: puedes mostrar un mensaje de error o registrar el error
        console.error('Error al cargar el producto:', error.message);
        setDataLoaded(true);
        // Puedes redirigir a una página de error o hacer algo más según tus necesidades
      }
    }
  
    loadProduct();
  },[]);
  
  

  // Función que se ejecuta al enviar el formulario
  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateProduct(params.id, data)
    } else {
      createProduct(data);
    }
    navigate('/productsPageAdmin');
  });
  if (!dataLoaded) {
    return (
      <div className='pt-32 flex justify-center items-center'>
        <div className="relative">
          <div className="w-20 h-20 border-purple-200 border-2 rounded-full"></div>
          <div className="w-20 h-20 border-primary border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>
      </div>
    );
  }
  return (
    <div className='pt-40 lg:pt-14'>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white border border-spacing-1 border-red-300 mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-brownPrimary rounded-full flex flex-shrink-0 justify-center items-center text-red-300 text-2xl font-mono">
                  <FaHamburger />
                </div>
                <div className="block pl-2 text-xl self-start text-black">
                  <h2 className="leading-relaxed font-veneer tracking-wide text-2xl">Crea o Edita un Producto</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    Completa el siguiente formulario para agregar o editar un producto segun sea el caso.</p>
                </div>
              </div>
              <form onSubmit={onSubmit}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose font-semibold ">Producto:</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Producto"
                        {...register('title')}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose font-semibold">Descripcion:</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Descripcion"
                        {...register('description')}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose font-semibold">Url Imagen:</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Url Imagen"
                        {...register('urlImage')}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose font-semibold">Precio:</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Precio"
                        {...register('price')}

                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose font-semibold">Cantidad:</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Cantidad"
                        {...register('quantity')}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="leading-loose font-semibold">Categoria:</label>
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
                    <div className='border border-spacing-1 p-3 shadow-sm'>
                      <label className="leading-loose font-semibold">Ingredientes:</label>
                      <IngredientsForm
                        register={register}
                      />
                    </div>

                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    <button className="bg-white border border-spacing-1 border-red-700 flex justify-center items-center w-full text-black px-4 py-3 rounded-md focus:outline-none hover:bg-primary hover:text-white font-veneer text-xl">Actualizar</button>
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
