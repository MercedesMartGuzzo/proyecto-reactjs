import React, { useContext, useState, useCallback } from 'react';
import ItemCount from '../../../itemCount/ItemCount.jsx';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

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
        Toastify({
            text: `¡Agregado al carrito!`,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background:"peru",
                color: "#7e3333",
                fontFamily: "inherit",
                borderRadius: "10px",
            },
        }).showToast();
    };

    return (
        <article className="contenedor-card">
            <div className="wrapp-foto">
                <img className="foto-item" src={item.image} alt={item.title} />
                <ItemCount
                    cantidad={cantidad}
                    restaContador={restaContador}
                    sumaContador={sumaContador}
                    onAgregar={handleAgregar}
                />
            </div>
            <div className="card-info">
                <span className="card-title title1">{item.title}</span>
                <span className="card-price">${item.price}</span>
                <p className="card-description">{item.description}</p>
            </div>
        </article>
    );
}

export default Item;