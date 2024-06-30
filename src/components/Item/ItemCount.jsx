import React from "react";

function ItemCount({ cantidad, handleSumar, handleRestar, handleAgregar }) {
  return (
    <>
      <div className="item-count">
        <button onClick={handleRestar}>-</button>
        <h4>{cantidad}</h4>
        <button onClick={handleSumar}>+</button>
      </div>
      <button className="agregar-al-carrito" onClick={handleAgregar}>
        Agregar al carrito
      </button>
    </>
  );
}

export default ItemCount;
