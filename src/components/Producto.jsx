import React from "react";

const Producto = ({ producto, productos, carrito, setCarrito }) => {
  const { id, nombre, precio } = producto;

  //Agregar Producto al Carrito
  const selecionarProducto = id => {
    let producto = productos.filter(producto => producto.id === id)[0];
    /* producto.id = carrito.length+1;
    console.log(producto.id); */
    setCarrito([...carrito, producto]);
  };

  const elimnarProducto = id => {      
      const productos = carrito.filter( producto => producto.id !== id)      
      setCarrito(productos)

  }

  return (
    <div>
      <h2>        
        {id} - {nombre}
      </h2>
      <p> ${precio}</p>      
      {productos === undefined ? (
        <button type="button" onClick={() => elimnarProducto(id)}>
          Eliminar
        </button>
      ) : (
        <button type="button" onClick={() => selecionarProducto(id)}>
          Compar
        </button>
      )}
    </div>
  );
};

export default Producto;
