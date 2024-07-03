import React from "react";
import "../../main.css";

function ItemCount({ cantidad, handleSumar, handleRestar }) {
  return (
    <>
      <div className="item-count">
        <button onClick={handleRestar}>-</button>
        <h4>{cantidad}</h4>
        <button onClick={handleSumar}>+</button>
      </div>
      <button className="agregar-al-carrito">Agregar al carrito</button>
    </>
  );
}

export default ItemCount;
