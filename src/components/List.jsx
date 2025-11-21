import { Link } from 'react-router-dom'; 
import Interprete from './Interprete'; 

/**
 * Componente List reutilizable.
 *
 * - Si recibo la prop "esInterprete={true}", renderizo el componente <Interprete>.
 * - Si no, asumo que es una película y muestro su tarjeta estándar.
 * * De esta forma reutilizo el CSS del grid sin complicar el código.
 */
export default function List({ items = [], esInterprete = false }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4" role="list">
      {items.map(item => (
        <li key={item.id || item.nombre}>
          
          {/* ¿Es intérprete? Sí o No */}
          {esInterprete ? (
            <Interprete 
              nombre={item.nombre} 
              foto={item.imagen} 
            >
              {/* Pasamos la biografía como children */}
              {item.biografia} 
            </Interprete>
          ) : (
            /* TARJETA DE PELÍCULA (Por defecto) */
            <article className="bg-white rounded shadow hover:shadow-md transition p-3">
              <img 
                src={item.cartelera} 
                alt={`Cartel ${item.nombre}`} 
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold">{item.nombre}</h3>
              
              {/* Enlace de Router  */}
              <Link to={`/pelicula/${item.id}`} className="inline-block mt-2 text-blue-600">
                Ver detalle
              </Link>
            </article>
          )}

        </li>
      ))}
    </ul>
  );
}