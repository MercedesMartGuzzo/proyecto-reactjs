import React, { useContext, useState, useCallback } from 'react';
import ItemCount from '../../../itemCount/ItemCount.jsx';
import "./Item.css";
import { Context } from '../../../../context/Context.jsx';

function Item({ item }) {
    const { Agregar } = useContext(Context);
    const [cantidad, setCantidad] = useState(1);

    const restaContador = useCallback(() => {
        setCantidad(prevCantidad => (prevCantidad > 1 ? prevCantidad - 1 : 1));
    }, []);

    const sumaContador = useCallback(() => {
        setCantidad(prevCantidad => prevCantidad + 1);
    }, []);

    const handleAgregar = () => {
        Agregar(item, cantidad);
    };

    return (
        <article className="contenedor-card">
            <div className="wrapp-foto">
                <img className="foto-item" src={item.image} alt={item.title} />
            </div>
            <div className="card-info">
                <p className="card-title title1">{item.title}</p>
                <span className="card-price">${item.price}</span>
                <p className="card-description">{item.description}</p>
            </div>
            <ItemCount
                cantidad={cantidad}
                restaContador={restaContador}
                sumaContador={sumaContador}
                onAgregar={handleAgregar}
            />
        </article>
    );
}

export default Item;