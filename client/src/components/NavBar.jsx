import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'
function NavBar() {
    const { logout } = useAuth();
    const handleLogout = async () => {
        // Llama a la función de logout del contexto.
        await logout();
    }
    return (
        <nav>
            <div className='flex justify-between items-center p-3'>
                <div>

                    <Link to="/">
                        <img src="logo.png" width={200} />
                    </Link>
                </div>
                <div className='flex gap-3'>
                    <Link>Sobre Nosotros</Link>
                    <Link>Contactanos</Link>
                </div>
                <div>
                    <ul className='flex gap-3'>
                        <li className='rounded-lg p-2'><Link to="/login">Iniciar Sesion</Link></li>
                        <li className='rounded-lg bg-primary text-white p-2'><Link to="/register">Registrarse</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
