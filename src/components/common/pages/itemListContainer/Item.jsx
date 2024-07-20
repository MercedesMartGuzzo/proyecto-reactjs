import { NavLink } from "react-router-dom";
import "./Item.css"

import "./Item.css";

function Item({ item }) {
    return (
        <article className="contenedor-card">
          
                <img className= "foto-item" src={item.image} alt={item.title} />
                
                <div className="card-info">
                    <p className="card-title">{item.title}</p>
                    <span className="card-price">${item.price}</span>
                    <p className="card-description">{item.description}</p>
                   { <NavLink to="/" ><button className="card-button">A inicio</button></ NavLink>}
            </div>
  </article>
    );
}

export default Item;
