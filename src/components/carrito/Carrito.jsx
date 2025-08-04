import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../../context/Context.jsx";
import "./Carrito.css"
export const Carrito = () => {
    const { cart, precioFinal, limpiar, eliminarProducto } = useContext(Context);

    const limpiarCarrito = () => {
        limpiar();
    }

    const eliminaProducto = (id) => {
        eliminarProducto(id);
    }

    return (
        <div className='carrito container'>

            {cart.items.length > 0 ? (
                cart.items.map((item) => (
                    <div className="items-carrito" key={item.id}>
                        <h2>Productos agregados </h2>
                        <p className="card-title">{item.title}</p>
                        <p>{item.nombre}</p>
                        <p>Precio unitario: ${item.price}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.cantidad * item.price}</p>
                        <button className="eliminar" onClick={() => { eliminaProducto(item.id) }}>X</button>
                    </div>

                ))
            ) : (
                <div className="titulo">
                    <h2>El carrito está vacío😒</h2>
                </div>
            )}

            {cart.items.length > 0 && (
                <div className="precio-total">
                    <h2>Precio total: ${precioFinal()}</h2>
                    <div className='botones-carrito'>
                        <Link to="/checkout" className='btn1 btn-carrito'>Finalizar compra</Link>
                        <Link to="/" className='btn1 btn-carrito' onClick={limpiarCarrito}>Vaciar carrito</Link>
                    </div>
                </div>
            )}

            {cart.items.length === 0 && (
                <Link to="/" className='agregar-btn'>Agregar productos</Link>
            )}
        </div>
    );
}

export default Carrito;