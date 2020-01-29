import React from 'react'
import './carrito.css'
import Producto from './Producto';

const Carrito = ({carrito, setCarrito}) => (    
    <div className='carrito'>        
        <h2>Tu lista de carrito</h2>
        { carrito.length=== 0 || carrito=== undefined 
            ? 'Su Carrito esta Vacio'
            : carrito.map( (producto)  => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    setCarrito={setCarrito}/>
            ))
        }
    </div>
  )

 
export default Carrito;