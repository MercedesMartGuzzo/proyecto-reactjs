import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import Item from './Item';

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setItem(data))
            .catch(error => {
                console.error('Error fetching data:', error);
               
            });
    }, [id]);

    return (
        <div>
            {item ? <Item item={item} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer;
