import React from "react";

const Producto = ({ producto, productos, carrito, setCarrito, index }) => {
  const { id, nombre, precio } = producto;

  //Agregar Producto al Carrito
  const selecionarProducto = id => {
    let producto = productos.filter(producto => producto.id === id)[0];
    /* producto.id = carrito.length+1;
    console.log(producto.id); */
    setCarrito([...carrito, producto]);
  };

  const elimnarProducto = index => {      
      const productos = carrito.filter( (producto, i) => i !== index)      
      setCarrito(productos)
  }

  return (
    <div>
      <h2>        
        {id} - {nombre}
      </h2>
      <p> ${precio}</p>      
      {productos === undefined ? (
        <button type="button" onClick={() => elimnarProducto(index)}>
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
