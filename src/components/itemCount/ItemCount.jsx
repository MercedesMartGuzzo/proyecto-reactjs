import React from 'react';

const ItemCount = ({ cantidad, restaContador, sumaContador, onAgregar }) => {
    return (
        <div className="counter">
            <div className="btn">
                <button className="btn1" onClick={restaContador}>-</button>
                <p>{cantidad}</p>
                <button className="btn1" onClick={sumaContador}>+</button>
            </div>
            <button className="btn-agregar" onClick={onAgregar}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
