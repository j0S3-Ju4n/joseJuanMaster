import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//componentes
import NavbarExample from "./layout/navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import ListaProducto from "./components/ListaProductos"
import DetalleProducto from './components/DetalleProducto';
import ListaCategorias from './components/ListaCategorias'; 
import MisCompras from './components/MisCompras'; 
import Carrito from './components/Carrito';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavbarExample/>}>
            <Route index element={ <Home/> } /> 
              <Route path='ListaProductos' element={ <ListaProducto/> } /> 
              <Route path='ListaCategorias' element={ <ListaCategorias/> } /> 
              <Route path='/producto/:id' element={ <DetalleProducto/> } />
              <Route path='/categoria/:id' element={ <ListaProducto/> } /> 
              <Route path='/result/:text' element={ <ListaProducto/> } /> 
              <Route path='/agregar/:id' element={ <Carrito/> } /> 
              <Route path='/MisCompras' element={ <MisCompras/> } /> 
              <Route path='*' element={ <Navigate replace to="/" />} /> 
          </Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
