import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useProduct } from '../context/productContext'; 
import { useParams } from 'react-router-dom';

function IngredientsForm({ register }) {
    const [dataLoaded, setDataLoaded] = useState(false);
    // Obtención de funciones y datos necesarios mediante hooks
    const { getProductId } = useProduct(); // Usamos el contexto del producto para obtener información de un producto
    const params = useParams(); // Hook de react-router para obtener parámetros de la URL con este se espera saber cuando si es necesario cargar los datos para su edicion
    const { control } = useForm(); // Hook de react-hook-form para gestionar el formulario
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'ingredients',
    }); // Hook de react-hook-form para gestionar campos de formulario dinámicos
    const [ingredientData, setIngredientData] = useState([]); // Estado local para almacenar información de ingredientes

    // Efecto para cargar información del producto al montar el componente verificando con params si estamos en una ruta de edicion, si esta se carga la informacion
    useEffect(() => {
        async function loadProduct() {
            if (params.id) {
                try {
                    const product = await getProductId(params.id);
    
                    // Verificar si hay ingredientes antes de establecer el estado
                    if (product && product.ingredients && product.ingredients.length > 0) {
                        setIngredientData(product.ingredients);
                        setDataLoaded(true);
                    }
                } catch (error) {
                    // Manejar el error, por ejemplo, mostrando un mensaje al usuario
                    console.error('Error al cargar el producto:', error.message);
                }
            }
        }

        loadProduct();
    }, [getProductId, params.id]);

    // Efecto para prellenar campos del formulario cuando ingredientData se actualiza y fields está vacío
    useEffect(() => {
        if (ingredientData.length > 0 && fields.length === 0) {
            ingredientData.forEach((ingredient) => {
                append({
                    name: ingredient.name,
                    amount: ingredient.amount,
                    _id: ingredient._id,
                });
            });
        }
    }, [ingredientData, fields, append]);

    // Función para agregar un nuevo campo al formulario
    const handleAgregarCampo = () => {
        append({ name: '', amount: '' });
    };

    // Función para quitar un campo específico del formulario
    const handleQuitarCampo = (index) => {
        remove(index);
    };

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

    // Renderización del formulario y campos dinámicos
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="bg-white p-2 w-full rounded shadow-md">
                    {/* Mapeo de campos dinámicos */}
                    {fields.map((field, index) => (
                        <div key={field.id} className="mb-4">
                            {/* Input para el nombre del ingrediente */}
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

                            {/* Input para la cantidad del ingrediente */}
                            <label htmlFor={`ingredients[${index}].amount`} className="block mb-2">
                                Cantidad:
                            </label>
                            <input
                                type="text"
                                id={`ingredients[${index}].amount`}
                                name={`ingredients[${index}].amount`}
                                placeholder="Ingrese monto"
                                className="w-full p-2 mb-2 border rounded"
                                {...register(`ingredients[${index}].amount`)}
                            />

                            {/* Botón para quitar el campo */}
                            <button
                                type="button"
                                onClick={() => handleQuitarCampo(index)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                Quitar Campo
                            </button>
                        </div>
                    ))}

                    {/* Botón para agregar un nuevo campo */}
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
    );
}

export default IngredientsForm;
