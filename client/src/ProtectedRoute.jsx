import React from 'react';
import { useAuth } from './context/authContext';
import { Navigate ,Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const { loading, isAuthenticated } = useAuth();
    console.log("¿Está autenticado?", isAuthenticated);

    if (loading) return <h1>Loading....</h1>;
    if (!isAuthenticated) return <Navigate to='/not-found' replace />;
    return <Outlet />;
}

export default ProtectedRoute;
