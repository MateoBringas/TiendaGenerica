import React from "react";
import Item from "./Item";

const ItemList = ({ productos, titulo }) => {
  return (
    <>
      <h2 className="main-title">{titulo}</h2>
      <div className="container">
        <div className="row">
          {productos.map((producto) => (
            <div className="col-xl-3 col-lg-4 col-md-5 mb-4" key={producto.id}>
              <Item producto={producto} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
