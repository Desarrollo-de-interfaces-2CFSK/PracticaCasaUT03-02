import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productos from '../data/productos';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();   

  // Convertir id de string a número para buscar
  const producto = productos.find(p => p.id === Number(id));

  if (!producto) {
    return (
      <section className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Producto no encontrado</h2>
        <button 
          onClick={() => navigate(-1)}
          className="text-teal-600 underline hover:text-teal-800"
        >
          Volver al catálogo
        </button>
      </section>
    );
  }

  return (
    <article className="container mx-auto py-10 px-4 max-w-5xl">
      
      {/* Breadcrumb / Volver */}
      <button
            onClick={() => navigate(-1)}
            className="mb-6 text-gray-500 hover:text-teal-700 flex items-center gap-2 transition-colors"
      >
         ← Volver a la tienda
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden md:flex">
        
        {/* Imagen */}
        <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            className="max-w-full max-h-96 object-contain drop-shadow-lg"
          />
        </div>
        
        {/* Info */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2">Fresco y Natural</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{producto.nombre}</h1>
          
          <p className="text-3xl font-bold text-teal-700 mb-6">{producto.precio.toFixed(2)}€ <span className="text-base font-normal text-gray-400">/ ud</span></p>
          
          <div className="prose text-gray-600 mb-8">
             <p>{producto.descripcion}</p>
             <p>Origen seleccionado de los mejores cultivos. Calidad garantizada.</p>
          </div>

          <div className="flex gap-4">
             <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">-</button>
                <span className="px-3 font-semibold">1</span>
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">+</button>
             </div>
             <button className="flex-grow bg-teal-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-800 transition-colors shadow-lg shadow-teal-200">
                Añadir a la Cesta
             </button>
          </div>
        </div>

      </div>
    </article>
  );
}