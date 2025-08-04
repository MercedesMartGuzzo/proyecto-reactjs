/* 
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
 


 */

import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../../Firebase/config"; 

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [groupedItems, setGroupedItems] = useState({});
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
        if (!category) {
          agruparPorCategoria(data);
        }
        uploadProductsToFirestore(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [category]);

  // Función para agrupar productos por categoría
  const agruparPorCategoria = (items) => {
    const agrupado = items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
    setGroupedItems(agrupado);
  };

  // Función para poner mayúscula solo a la primera letra
  const ponerMayuscula = (texto) => texto.charAt(0).toUpperCase() + texto.slice(1);
 
  
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
      {/* Título principal */}
      <h2 className="titulo-secciones">
        {category ? ponerMayuscula(category) : "Todos los productos"}
      </h2>

      {/* Si hay categoría, mostrar sólo productos de esa categoría */}
      {category ? (
        <div className="items-grid">
          {items.map(item => (
            <Link key={item.id} to={`/products/detail/${item.id}`} className="item-link">
              <article className="contenedor-card">
                <div className="wrapp-foto">
                  <img className="foto-item" src={item.image} alt={item.title} />
                </div>
                <div className="card-info">
                  <p className="card-title">{item.title}</p>
                  <span className="card-price">${item.price}</span>
                  <button className="card-button">Ver detalles</button>
                </div> 
              </article>
            </Link>
          ))}
        </div>
      ) : (
        // Si NO hay categoría, mostrar productos agrupados por categoría
        Object.entries(groupedItems).map(([categoria, productos]) => (
          <div key={categoria} className="categoria-bloque">
            <h3 className="subtitulo-categoria">{ponerMayuscula(categoria)}</h3>
            <div className="items-grid">
              {productos.map(item => (
                <Link key={item.id} to={`/products/detail/${item.id}`} className="item-link">
                  <article className="contenedor-card">
                    <div className="wrapp-foto">
                      <img className="foto-item" src={item.image} alt={item.title} />
                    </div>
                    <div className="card-info">
                      <p className="card-title">{item.title}</p>
                      <span className="card-price">${item.price}</span>
                      <button className="card-button">Ver detalles</button>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <hr className="linea-divisoria" />
          </div>
        ))
      )}
    </div>
  );
}

export default ItemListContainer;
