/**
 * Componente principal de enrutamiento.
 * Estructura de navegación para la tienda de productos.
 */
import { Routes, Route, Navigate } from 'react-router-dom';
import Contenedor from './components/Contenedor';

// Importación de páginas
import HomePage from './pages/HomePage';
import ProductosPage from "./pages/ProductosPages";
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import Admin from './pages/Admin';
import AdminLayout from './pages/AdminLayout';
// import InterpretesPage from './pages/InterpretesPage'; // Ya no es necesario para productos

function App() {
  return (
    <Routes>
      <Route element={<Contenedor />}>
        
        <Route path='/' element={<HomePage />} />
        <Route path='/inicio' element={<Navigate to='/' />} />
        
        {/* Listado de productos */}
        <Route path='/productos' element={<ProductosPage />} />
        
        {/* Detalle de producto */}
        <Route path='/producto/:id' element={<DetailPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
      </Route>

      <Route path='*' element={
        <Contenedor>
          <ErrorPage />
        </Contenedor>
      } />
    </Routes>
  );
}

export default App;