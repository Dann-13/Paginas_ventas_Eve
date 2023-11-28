import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';

function IngredientsForm({ register }) {
    const { control } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'ingredients',
    });


    const handleAgregarCampo = () => {
        append({ name: '', amount: '' });
    };

    const handleQuitarCampo = (index) => {
        remove(index);
    };

    return (
        <div>
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
    )
}

export default IngredientsForm
