import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage'
import Profile from './pages/Profile'
import { AuthProvider } from './context/authContext';
import ProductsFormPage from './pages/ProductsFormPage';
import ProtectedRouted from './ProtectedRouted';
import { ProductProvider } from './context/productContext';
function app() {
  return (
    <AuthProvider>
      <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>

          <Route element={<ProtectedRouted />}>
            <Route path='/products' element={<ProductsPage />}></Route>
            <Route path='/add-product' element={<ProductsFormPage />}></Route>
            <Route path='/product/:id' element={<ProductsFormPage />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  )
}
export default app;