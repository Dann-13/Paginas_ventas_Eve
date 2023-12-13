import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/admin/ProductsPage';
import HomePage from './pages/HomePage'
import ProfileAdmin from './pages/admin/ProfileAdmin'
import { AuthProvider } from './context/authContext';
import ProductsFormPage from './pages/admin/ProductsFormPage';
//Rutas de Proteccion
import ProtectedRoute from './ProtectedRoute';
import AdminProtectedRoute from './AdminProtectedRoute'
//ruta pagina np encontrada
import NotFoundRoute from './pages/NotFoundRoute'
import { ProductProvider } from './context/productContext';
import ProfileUser from './pages/ProfileUser';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';
function app() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>

            <Route path='/' element={<HomePage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/register' element={<RegisterPage />}></Route>
            <Route element={
              <ProtectedRoute />
            }>
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/profileUser' element={<ProfileUser />} />
              <Route path='*' element={<NotFoundRoute />} />
            </Route>


            {/* Protección para rutas de administrador */}
            <Route element={<AdminProtectedRoute />}>
              <Route path='/productsPageAdmin' element={<ProductsPage />} />
              <Route path='/add-product' element={<ProductsFormPage />} />
              <Route path='/product/:id' element={<ProductsFormPage />} />
              <Route path='/profileAdmin' element={<ProfileAdmin />} />
              <Route path='*' element={<NotFoundRoute />} />
            </Route>



            <Route path='*' element={<NotFoundRoute />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  )
}
export default app;