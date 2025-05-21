import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listarproductos from "./components/ListaProductos";
import './config/axios.config'
import AñadirProducto from "./components/AñadirProductosform";
import Navegacion from "./components/navegacion";

function App() {

  return (
    <>
    <Router>
      <div className="flex"> 
        <Navegacion />
         <main className="ml-48 p-6 w-full">
          <Routes>
            <Route path="/crearproducto" element={<AñadirProducto />} />
            <Route path="/mostrarproductos" element={<Listarproductos />} />
          </Routes>
         </main>
      </div>
    </Router>
    </>
  )
}

export default App
