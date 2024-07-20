import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    let url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : `https://fakestoreapi.com/products`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('No funciona');
        }
        return response.json();
      })
      .then(data => setItems(data))
      .catch(error => {
        console.error('Error fetching data:', error);
       
      });
  }, [category]);

  const ponerMayuscula = category ? `Sección- ${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Todos los productos';

  return (
    <div className="item-list-container container">
      <h2 className="titulo-secciones">{ponerMayuscula}</h2>
      <div className="items-grid">
        {items.map(item => (
          <Link key={item.id} to={`/products/detail/${item.id}`} className="item-link">
            <article className="contenedor-card">
              <img className="foto-item" src={item.image} alt={item.title} />
            <div className="card-info" >
              <button className="card-button">Ver detalles</button>
              <span className="card-price">${item.price}</span>
              <p className="card-title">{item.title}</p>
             </div> 
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
