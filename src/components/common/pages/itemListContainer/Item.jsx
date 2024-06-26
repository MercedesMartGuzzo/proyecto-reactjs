import "./Item.css"

import "./Item.css";

function Item({ item }) {
    return (
        <article className="contenedor-card">
            <div className="card-producto">
                <img src={item.image} alt={item.title} />
                <div className="card-info">
                    <p className="card-title">{item.title}</p>
                    <span className="card-price">${item.price}</span>
                    <p className="card-description">{item.description}</p>
                    <button className="card-button">Agregar</button>
                </div>
            </div>
        </article>
    );
}

export default Item;
