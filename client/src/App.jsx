import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/admin/ProductsPage';
import HomePage from './pages/HomePage'
import ProfileAdmin from './pages/admin/ProfileAdmin'
import { AuthProvider } from './context/authContext';
import ProductsFormPage from './pages/admin/ProductsFormPage';
import ProtectedRouted from './ProtectedRouted';
import { ProductProvider } from './context/productContext';
import ProfileUser from './pages/ProfileUser';
import NavBar from './components/navigation/NavBar';
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

          <Route element={<ProtectedRouted />}>
            <Route path='/products' element={<ProductsPage />}></Route>
            <Route path='/add-product' element={<ProductsFormPage />}></Route>
            <Route path='/product/:id' element={<ProductsFormPage />}></Route>
            <Route path='/profileUser' element={<ProfileUser />}></Route>
            <Route path='/profileAdmin' element={<ProfileAdmin />}></Route>
            <Route path='/productsPageAdmin' element={<ProductsPage />}> </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  )
}
export default app;