import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/authContext'

// Componente de protección para rutas de administrador
function AdminProtectedRoute() {
  const {loading, isAuthenticated, isAdmin} = useAuth();
  console.log("esta autenticado?" , isAuthenticated, isAdmin)
  console.log(isAuthenticated && isAdmin)
  if(loading) return <h1>Loading....</h1>
  if(isAuthenticated && isAdmin){
    console.log("estas autorizado")
  }else{
    return <Navigate to='/not-found' replace/>
  }
  
return <Outlet />
}
export default AdminProtectedRoute


