import React, { useState } from 'react';
import  Header from "./components/Header"
import  Footer from "./components/Footer"
import  Producto from "./components/Producto"
import Carrito from './components/Carrito';

function App() {
  const [productos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio:50},
    { id: 2, nombre: 'Camisa VueJS', precio:40},
    { id: 3, nombre: 'Camisa Node.js', precio:30},
    { id: 4, nombre: 'Camisa ReactJS', precio:20},
    { id: 5, nombre: 'Camisa Angular', precio:10},
  ])

  const [carrito, setCarrito] = useState([])

  const fecha = new Date().getFullYear();
  return (
    <div className="App">
        <Header titulo='Tienda Virtual'/>
        <h1>Lista de productos</h1>
        {productos.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            setCarrito={setCarrito}/>
            
        ))}
        <Footer fecha={fecha}/>
        <Carrito 
          carrito={carrito}
          setCarrito={setCarrito}/>
    </div>
  );
}

export default App;
