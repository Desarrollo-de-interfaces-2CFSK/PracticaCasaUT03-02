import { Link } from 'react-router-dom';

/**
 * Grid de Productos.
 * Muestra tarjetas limpias con imagen, precio y botón.
 */
export default function List({ items = [] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4" role="list">
      {items.map(item => (
        <li key={item.id}>
            <article className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition p-4 flex flex-col items-center text-center h-full">
              
              {/* Imagen del producto */}
              <figure className="w-full aspect-square mb-4 overflow-hidden rounded-md bg-gray-50">
                <img 
                  src={item.imagen} 
                  alt={item.nombre} 
                  className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                />
              </figure>
              
              {/* Info */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.nombre}</h3>
                <p className="text-gray-500 text-sm mb-2">Unidad/kg</p>
              </div>

              {/* Precio y Acción */}
              <div className="mt-auto w-full">
                <p className="text-xl font-bold text-gray-900 mb-3">{item.precio.toFixed(2)}€</p>
                
                <div className="flex gap-2 justify-center">
                    <Link 
                        to={`/producto/${item.id}`} 
                        className="text-teal-700 text-sm font-medium underline hover:text-teal-900"
                    >
                        Ver detalle
                    </Link>
                    <button className="ml-2 bg-teal-700 text-white px-4 py-1 rounded-full text-sm hover:bg-teal-800 transition">
                        Añadir +
                    </button>
                </div>
              </div>

            </article>
        </li>
      ))}
    </ul>
  );
}