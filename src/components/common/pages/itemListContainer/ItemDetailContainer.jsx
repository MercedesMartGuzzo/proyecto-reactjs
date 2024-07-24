
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db}  from "../../../../Firebase/config"; 
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
            .then(data => {
                setItem(data);
                // Upload the product to Firestore
                uploadProductToFirestore(data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    // Function to upload the product to Firestore
    const uploadProductToFirestore = async (product) => {
        try {
            await addDoc(collection(db, "products"), {
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.image,
                category: product.category, 
            });
            console.log("Product uploaded to Firestore successfully!");
        } catch (error) {
            console.error("Error uploading product to Firestore:", error);
        }
    };

    return (
        <div>
            {item ? <Item item={item} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer;
