import React, { useState } from 'react'
import { useAuth } from '../../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

function Options() {
    const [mostrarOpciones, setMostrarOpciones] = useState(false);
    const { logout} = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };
    const handleMostrarOpciones = () => {
        setMostrarOpciones(!mostrarOpciones);
    };
    return (
        <div className="relative ml-3">
            <div>
                <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded={mostrarOpciones}
                    aria-haspopup="true"
                    onClick={handleMostrarOpciones}
                >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="h-8 w-8 rounded-full"
                        src="/hamburguesita.png"
                        alt=""
                    />
                </button>
            </div>
            {mostrarOpciones && (
                <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                >
                    <Link to="/profileUser" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                        Perfil
                    </Link>
                    
                    <div className=' bg-primary text-white py-1 px-5 cursor-pointer font-veneer' onClick={handleLogout}>Salir</div>
                </div>
            )}
        </div>
    )
}

export default Options