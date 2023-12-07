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
        <div class="contain py-48 md:py-28">

            <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                {
                    registerErrors.map((error, i) => (
                        <div className='bg-red-400 text-white p-2' key={i}> {error} </div>
                    ))
                }
                <h2 class="text-2xl uppercase font-medium mb-1">Registrate</h2>
                <p class="text-gray-600 mb-6 text-sm">
                   Bienvenido al Formulario de Registro
                </p>
                <form action="#" method="post" onSubmit={onSubmit} >
                    <div class="space-y-2">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                                {...register('username', { required: true })}
                            />
                            {
                                errors.username && (
                                    <p className='text-red-400'>Usuario es requerido</p>
                                )
                            }
                        </div>
                        <div>
                            <label for="email" class="text-gray-600 mb-2 block">Email address</label>
                            <input type="email" name="email" id="email"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="youremail.@domain.com"
                                {...register('email', { required: true })}
                            />
                            {
                                errors.email && (
                                    <p className='text-red-400'>Email es requerido</p>
                                )
                            }
                        </div>
                        <div>
                            <label for="password" class="text-gray-600 mb-2 block">Password</label>
                            <input type="password" name="password" id="password"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******"
                                {...register('password', { required: true })} />

                            {
                                errors.password && (
                                    <p className='text-red-400'>Contraseña es requerida</p>
                                )
                            }
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-6">
                        <div class="flex items-center">
                            <input type="checkbox" name="remember" id="remember"
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label for="remember" class="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                        </div>
                        <a href="#" class="text-primary">Forgot password</a>
                    </div>
                    <div class="mt-4">
                        <button type="submit"
                            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Registrar</button>
                    </div>
                </form>


                <p class="mt-4 text-center text-gray-600">Don't have account?
                    <Link to={"/loguin"}>Ingresa Ahora</Link></p>
            </div>
        </div>

    )
}

export default RegisterPage;