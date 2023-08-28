import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage';
function app(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Pagina de Inicio</h1>}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/products' element={<h1>Pagina de listar Productos</h1>}></Route>
        <Route path='/add-product' element={<h1>Pagina de crear producto</h1>}></Route>
        <Route path='/product/:id' element={<h1>Pagina de buscar producto</h1>}></Route>
        <Route path='/profile' element={<h1>Pagina de perfil</h1>}></Route>

      </Routes>
    </BrowserRouter>
  )
}
export default app;