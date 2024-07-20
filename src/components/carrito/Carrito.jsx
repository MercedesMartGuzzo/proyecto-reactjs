import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../../context/Context.jsx";
export const Carrito = () => {
    const { cart, precioFinal, limpiar, eliminarProducto } = useContext(Context);

    const limpiarCarrito = () => {
        limpiar();
    }

    const eliminaProducto = (id) => {
        eliminarProducto(id);
    }

    return (
        <div>

            {cart.items.length > 0 ? (
                cart.items.map((item) => (

                    <div className="items" key={item.id}>
                        <h1>Productos agregados</h1>
                        <p>{item.nombre}</p>
                        <p>Precio unitario: ${item.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.cantidad * item.precio}</p>
                        <button className="eliminar" onClick={() => { eliminaProducto(item.id) }}>X</button>
                    </div>
                ))
            ) : (
                <div className="mensaje">
                    <h2>El carrito está vacío</h2>

                </div>
            )}

            {cart.items.length > 0 && (
                <>
                    <div className="total" >
                        <h2>Precio total: ${precioFinal()}</h2>
                    </div>

                    <div>
                        <Link to="/checkout" className='boton-item'  >Finalizar compra</Link>
                        <Link to="/" className='boton-item' onClick={limpiarCarrito}>Vaciar carrito</Link>
                    </div>
                </>
            )}

            {cart.items.length === 0 && (
                <Link to="/" className='boton-item '>Agregar productos</Link>
            )}
        </div>
    );
}

export default Carrito;