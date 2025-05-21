import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <nav className="h-screen w-48 bg-gray-100 p-6 shadow-lg flex flex-col gap-4 fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-4">Menú</h2>
      <Link to="/crearproducto" className="text-blue-600 hover:underline">
        Crear Producto
      </Link>
      <Link to="/mostrarproductos" className="text-blue-600 hover:underline">
        Mostrar Productos
      </Link>
    </nav>
  );
};

export default Navegacion;