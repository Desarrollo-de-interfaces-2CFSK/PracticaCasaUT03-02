import productos from '../data/productos';
import List from '../components/List';

export default function ProductosPage() {
  return (
    <section className="container mx-auto py-8"> 
      <div className="flex justify-between items-center mb-6 px-4">
         <h2 className="text-3xl font-bold text-gray-800">Nuestros Productos</h2>
         <span className="text-gray-500">{productos.length} productos encontrados</span>
      </div>
      <List items={productos} />
    </section>
  );
}