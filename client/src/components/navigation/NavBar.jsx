import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
function NavBar() {
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        // Llama a la función de logout del contexto.
        await logout();
        navigate('/')

    }
    function renderButtons() {
        if (isAuthenticated) {
            return (
                <div className='flex gap-3'>
                    <li className='rounded-lg p-2'><Link to="/login">profile</Link></li>
                    <li className='rounded-lg bg-primary text-white py-2 px-5 cursor-pointer' onClick={handleLogout}>Salir</li>
                </div>
            )
        } else {
            return (
                <div className='flex gap-3'>
                    <li className='rounded-lg p-2 font-veneer'><Link to="/login">Iniciar Sesion</Link></li>
                    <li className='rounded-lg bg-primary text-white p-2 font-veneer'><Link to="/register">Registrarse</Link></li>
                </div>
            )
        }
    }
    return (
        <nav className='flex flex-col items-center justify-between gap-5 p-3 md:flex-row'>
            <div className='md:flex items-center'>
                <div className='flex items-center justify-center'>
                    <Link to="/">
                        <img src="logo.png" width={200} alt="Logo" />
                    </Link>
                </div>
                <div className='pt-3 pl-0 md:pt-0 md:pl-20'>
                    <Link className='hover:border-b-2 border-red-400 p-2 font-veneer'>Sobre Nosotros</Link>
                    <Link className='hover:border-b-2 border-red-400 p-2 font-veneer'>Contactanos</Link>
                </div>
            </div>
            <div>
                <ul>
                    {renderButtons()}
                </ul>
            </div>
        </nav>

    )
}

export default NavBar
