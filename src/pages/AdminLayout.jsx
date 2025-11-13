import { Outlet } from 'react-router-dom';
function AdminLayout() {
 return (
 <>
 <h1>Panel de Administración</h1>
 {/* Aquí se renderizan Productos o Categorias según la ruta */}
 <Outlet />
 </>
 );
}