import "./ItemListContainer.css"

const ItemListContainer = ({gretting}) => {
  return (
    <div className="saludo">
      <h1>{gretting}</h1>
    </div>
  );
};

export default ItemListContainer;