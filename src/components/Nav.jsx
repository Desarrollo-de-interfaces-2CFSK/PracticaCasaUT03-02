import { useState } from "react";
import { NavLink } from 'react-router-dom';

/**
 * Navegación con estilos de TerraBloom.
 * Active class: texto blanco y subrayado o negrita.
 * Inactive: texto teal-100 (verde muy claro).
 */
const activeClass = ({ isActive }) => 
  isActive 
    ? 'text-white font-bold underline decoration-lime-400 decoration-2 underline-offset-4' 
    : 'text-teal-100 hover:text-white transition-colors';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuId = "main-navigation-menu";

  return (
    <>
      {/* Botón hamburguesa (visible en móvil) - Texto blanco */}
      <button
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
        className="text-white text-2xl p-2 md:hidden focus:outline-none focus:ring focus:ring-lime-400 rounded"
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Menú */}
      <nav 
        aria-label="Menú principal"
        id={menuId}
        className={`${open ? 'block absolute top-16 left-0 w-full bg-teal-800 p-4 z-50' : 'hidden'} md:flex md:static md:bg-transparent md:p-0 md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row gap-6 items-center">
          <li>
            <NavLink to="/" className={activeClass} end onClick={() => setOpen(false)}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos" className={activeClass} onClick={() => setOpen(false)}>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className={activeClass} onClick={() => setOpen(false)}>
              Admin
            </NavLink>
          </li>
          {/* Iconos extra estilo header (Búsqueda, Carrito, Usuario) */}
          <li className="flex gap-4 md:ml-4">
             <span className="cursor-pointer hover:text-lime-400">🔍</span>
             <span className="cursor-pointer hover:text-lime-400">🛒</span>
             <span className="cursor-pointer hover:text-lime-400">👤</span>
          </li>
        </ul>
      </nav>
    </>
  );
}