import React, { useState } from "react";

function ItemCount({ item }) {
  const [cantidad, setCantidad] = useState(0);

  const handleRestar = () => {
    cantidad && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock
      ? setCantidad(cantidad + 1)
      : alert("Stock insuficiente");
  };

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
