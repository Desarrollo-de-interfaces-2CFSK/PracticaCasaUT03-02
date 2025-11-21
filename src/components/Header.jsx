import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';

/**
 * Header global estilo TerraBloom.
 * Fondo verde azulado oscuro (teal-700).
 */
export default function Header() {
  return (
    <header 
      role="banner" 
      className="bg-teal-700 shadow-md w-full p-4 text-white"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Título */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-white flex items-center gap-2 hover:text-teal-100"
          aria-label="Inicio - TerraBloom"
        >
          {/* Icono de hoja opcional */}
          <span>🌿 TerraBloom</span>
        </Link>
        
        <Nav />
      </div>
    </header>
  );
}