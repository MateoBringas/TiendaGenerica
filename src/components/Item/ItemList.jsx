import React from "react";
import Item from "./Item";

const ItemList = ({ productos, titulo }) => {
  return (
    <>
      <h2 className="main-title">{titulo}</h2>
      <div className="container">
        <div className="productos">
          {productos.map((producto) => (
            <Item producto={producto} key={producto.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
