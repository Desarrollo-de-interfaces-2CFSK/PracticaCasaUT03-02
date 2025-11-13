import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/Login';
import AdminLayout from './pages/AdminLayout';
import Productos from './pages/AdminLayout/Productos';
import Categorias from './pages/AdminLayout/Categorias';
import ErrorPage from './pages/ErrorPage';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/inicio' element={<Navigate to='/' />} />
      <Route path='/login' element={<Login />} />
      
      {/* Rutas protegidas */}
    <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
    <Route path='/admin' element={<AdminLayout />}>
    <Route path='productos' element={<Productos />} />
    <Route path='categorias' element={<Categorias />} />
    </Route>
    </Route>

      </Routes>
   
  )
}

export default App
