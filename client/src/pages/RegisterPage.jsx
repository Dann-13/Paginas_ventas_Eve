import { useForm } from 'react-hook-form'
import { useAuth } from '../context/authContext'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) navigate('/');
    }, [isAuthenticated])
    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (

        <div className="container mx-auto px-6 py-10 pt-24 md:px-24">
            {
                registerErrors.map((error, i) => (
                    <div className='bg-red-400 text-white p-2' key={i}> {error} </div>
                ))
            }
            <h1 className="mb-4 text-3xl font-bold text-brownPrimary">Crea Tu Cuenta</h1>
            <p className="mb-8 text-gray-600">El siguiente formulario le permitirá crear una cuenta de El Corral para realizar sus pedidos de una forma más rápida y personalizada.</p>
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2" method="post" onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="document" className="block text-sm font-medium text-brownPrimary">Número de Documento</label>
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
                    <label htmlFor="nombre" className="block text-sm font-medium text-brownPrimary">Nombre Completo</label>
                    <input type="text" name="name" id="name" className="mt-1 w-full rounded-md border p-2"
                        {...register('name', { required: true })} /> {errors.name && (
                            <p className="text-red-400">Usuario es requerido</p>
                        )}
                </div>
                <div className="mb-4">
                    <label htmlFor="cell" className="block text-sm font-medium text-brownPrimary">Número de Celular</label>
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
                    <label htmlFor="inputCiudadLine2" className="block text-sm font-medium text-brownPrimary">Ciudad</label>
                    <select className="mt-1 w-full rounded-md border p-2" id="inputCiudadLine2"
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
                    <label htmlFor="address" className="block text-sm font-medium text-brownPrimary">Direccion</label>
                    <input type="text" name="address" id="address" className="mt-1 w-full rounded-md border p-2"
                        {...register('address', { required: true })} /> {errors.address && (
                            <p className="text-red-400">La direccion es requerida es requerido</p>
                        )}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-brownPrimary">Correo</label>
                    <input type="email" name="email" id="email" className="mt-1 w-full rounded-md border p-2"
                        {...register('email', { required: true })} /> {errors.email && (
                            <p className="text-red-400">Email es requerido</p>
                        )}
                </div>
                <div className="mb-4">
                    <label htmlFor="contrasena" className="block text-sm font-medium text-brownPrimary">Contraseña</label>
                    <input type="password" name="password" id="password" className="mt-1 w-full rounded-md border p-2"
                        {...register('password', { required: true })} /> {errors.password && (
                            <p className="text-red-400">Contraseña es requerida</p>
                        )}
                </div>
                <div className='w-full h-10 flex justify-center'>
                    <button type="submit" className="rounded-md bg-primary px-7 text-white">Enviar</button>
                </div>
            </form>
        </div>

    )
}
2
export default RegisterPage;