
  import "./ItemListContainer.css";
  import { useEffect, useState } from "react";
  import { Link, useParams } from "react-router-dom";
  import { collection, addDoc } from "firebase/firestore"; 
  import { db } from "../../../../Firebase/config"; 
  
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
        .then(data => {
          setItems(data);
          
          uploadProductsToFirestore(data); 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [category]);
  
    const ponerMayuscula = category ? `Sección- ${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Todos los productos';
  
    
    const uploadProductsToFirestore = async (products) => {
      try {
        for (const product of products) {
          await addDoc(collection(db, "products"), {
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image,
            category: product.category, 
          });
        }
        console.log("Productos subidos a Firestore");
      } catch (error) {
        console.error("Error al subir productos:", error);
      }
    };
  
  return (
    <div className="item-list-container container">
      <h2 className="titulo-secciones">{ponerMayuscula}</h2>
      <div className="items-grid">
        {items.map(item => (
          <Link key={item.id} to={`/products/detail/${item.id}`} className="item-link">
            <article className="contenedor-card">
              <div className="wrapp-foto">
              <img className="foto-item" src={item.image} alt={item.title} />
              </div>
            <div className="card-info" >
            <p className="card-title">{item.title}</p>
              <span className="card-price">${item.price}</span>
              <button className="card-button">Ver detalles</button>
              </div> 
            </article>
          </Link>
        ))}
      </div>
    </div>
  ); 
}

export default ItemListContainer;
