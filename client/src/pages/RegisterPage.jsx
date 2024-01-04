import { useForm } from 'react-hook-form'
import { useAuth } from '../context/authContext'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    console.log(registerErrors)
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) navigate('/');
    }, [isAuthenticated])
    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (

        <div className="container mx-auto px-6 py-10 pt-24">
            <h1 className="mb-4 text-3xl font-bold">Crea Tu Cuenta</h1>
            <p className="mb-8 text-gray-600">El siguiente formulario le permitirá crear una cuenta de El Corral para realizar sus pedidos de una forma más rápida y personalizada.</p>
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2" method="post" onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="document" className="block text-sm font-medium text-gray-600">Número de Documento</label>
                    <input
                        type="text"
                        name="document"
                        id="document"
                        className="mt-1 w-full rounded-md border p-2"
                        {...register('document', { required: true })}
                    />
                    {errors.document && (
                        <p className="text-red-400">El número de documento es requerido</p>
                    )}
                </div>

                <div className="mb-4">
                    <label for="nombre" className="block text-sm font-medium text-gray-600">Nombre Completo</label>
                    <input type="text" name="name" id="name" className="mt-1 w-full rounded-md border p-2"
                        {...register('name', { required: true })} /> {errors.name && (
                            <p className="text-red-400">Usuario es requerido</p>
                        )}
                </div>
                <div className="mb-4">
                    <label htmlFor="cell" className="block text-sm font-medium text-gray-600">Número de Celular</label>
                    <input
                        type="text"
                        name="cell"
                        id="cell"
                        className="mt-1 w-full rounded-md border p-2"
                        {...register('cell', { required: true })}
                    />
                    {errors.cell && (
                        <p className="text-red-400">El número de celular es requerido</p>
                    )}
                </div>

                <div className="mb-4">
                    <label for="inputCiudadLine2" className="block text-sm font-medium text-gray-600">Ciudad</label>
                    <select class="mt-1 w-full rounded-md border p-2" id="inputCiudadLine2"
                        {...register('city', { required: true })}>
                        <option value="">-</option>
                        <option value="Arauca">Arauca</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Barranquilla">Barranquilla</option>
                        <option value="Bogotá">Bogotá</option>
                        <option value="Bucaramanga">Bucaramanga</option>
                        <option value="Cali">Cali</option>
                        <option value="Cartagena">Cartagena</option>
                        <option value="Cúcuta">Cúcuta</option>
                        <option value="Florencia">Florencia</option>
                        <option value="Ibagué">Ibagué</option>
                        <option value="Leticia">Leticia</option>
                        <option value="Manizales">Manizales</option>
                        <option value="Medellín">Medellín</option>
                        <option value="Mitú">Mitú</option>
                        <option value="Mocoa">Mocoa</option>
                        <option value="Montería">Montería</option>
                        <option value="Neiva">Neiva</option>
                        <option value="Pasto">Pasto</option>
                        <option value="Pereira">Pereira</option>
                        <option value="Popayán">Popayán</option>
                        <option value="Puerto Carreño">Puerto Carreño</option>
                        <option value="Puerto Inírida">Puerto Inírida</option>
                        <option value="Quibdó">Quibdó</option>
                        <option value="Riohacha">Riohacha</option>
                        <option value="San Andrés">San Andrés</option>
                        <option value="San José del Guaviare">San José del Guaviare</option>
                        <option value="Santa Marta">Santa Marta</option>
                        <option value="Sincelejo">Sincelejo</option>
                        <option value="Tunja">Tunja</option>
                        <option value="Valledupar">Valledupar</option>
                        <option value="Villavicencio">Villavicencio</option>
                        <option value="Yopal">Yopal</option>
                    </select>
                    {errors.city && (
                        <p className="text-red-400">La ciudad es requerida</p>
                    )}
                </div>
                <div className="mb-4">
                    <label for="address" class="block text-sm font-medium text-gray-600">Direccion</label>
                    <input type="text" name="address" id="address" className="mt-1 w-full rounded-md border p-2"
                        {...register('address', { required: true })} /> {errors.address && (
                            <p className="text-red-400">La direccion es requerida es requerido</p>
                        )}
                </div>

                <div className="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-600">Correo</label>
                    <input type="email" name="email" id="email" className="mt-1 w-full rounded-md border p-2"
                        {...register('email', { required: true })} /> {errors.email && (
                            <p className="text-red-400">Email es requerido</p>
                        )}
                </div>
                <div className="mb-4">
                    <label for="contrasena" className="block text-sm font-medium text-gray-600">Contraseña</label>
                    <input type="password" name="password" id="password" className="mt-1 w-full rounded-md border p-2"
                        {...register('password', { required: true })} /> {errors.password && (
                            <p className="text-red-400">Contraseña es requerida</p>
                        )}
                </div>
                <div>
                    <button type="submit" className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Enviar</button>
                </div>
            </form>
        </div>

    )
}

export default RegisterPage;