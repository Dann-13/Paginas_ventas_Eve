import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

function NavBar() {
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const isAdmin = localStorage.getItem('isAdmin');
    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    const navigateToServicesSlider = () => {
        const servicesSliderElement = document.getElementById('servicesSlider');
        if (servicesSliderElement) {
          servicesSliderElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const renderLinks = () => {
        return (
            <nav className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-between p-3 bg-brownPrimary fixed w-full z-10'>
                <div className='col-span-1 flex justify-center md:justify-normal'>
                    <Link to="/">
                        <img src="/logo.png" width={200} alt="Logo" />
                    </Link>
                </div>

                {isAuthenticated && isAdmin ? (
                    <div className='col-span-1 md:col-span-2 flex flex-col md:flex-row gap-5 items-center justify-between'>
                        <div className='flex gap-3 md:flex-row items-center pl-0 md:pl-24'>
                            <Link className='font-veneer cursor-pointer text-white text-xl' to='/productsPageAdmin'>Ver Productos</Link>
                            <Link className='font-veneer cursor-pointer text-white text-xl' to='add-products'>Añadir Producto</Link>
                        </div>
                        <div className='flex gap-2'>

                            <div className='rounded-lg bg-primary text-white py-2 px-5 cursor-pointer font-veneer text-xl' onClick={handleLogout}>Salir</div>
                        </div>
                    </div>
                ) : (
                    <div className='col-span-1 md:col-span-2 flex flex-col md:flex-row gap-5 items-center justify-between'>
                        <div className='flex gap-7 md:flex-row items-center pl-0 md:pl-24'>
                            <Link className='font-veneer cursor-pointer text-white text-xl' to='/productsPageAdmin'>Contactenos</Link>
                            <button className='font-veneer cursor-pointer text-white text-xl'onClick={navigateToServicesSlider}>Menu</button>
                        </div>
                        {isAuthenticated ? (
                            <div className='flex gap-2'>

                                <div className='rounded-lg bg-primary text-white py-2 px-5 cursor-pointer font-veneer' onClick={handleLogout}>Salir</div>
                            </div>
                        ) : (
                            <div>
                                <div className='flex gap-2'>
                                    <Link to='/login' className='rounded-lg bg-gray-400 text-white py-2 px-5 cursor-pointer font-veneer'>Iniciar Sesion</Link>
                                    <Link to='/register' className='rounded-lg bg-primary text-white py-2 px-5 cursor-pointer font-veneer'>Registro</Link>
                                </div>
                            </div>
                        )}


                    </div>
                )}
            </nav>
        );
    };

    return <div>
        {renderLinks()}

    </div>;
}

export default NavBar;
