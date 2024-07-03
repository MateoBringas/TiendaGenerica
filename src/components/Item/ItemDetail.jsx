import React, { useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock
      ? setCantidad(cantidad + 1)
      : alert("Stock insuficiente");
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <div className="imagen">
          <img src={item.imagen} alt={item.titulo} />
        </div>
        <div className="contenido">
          <div className="info">
            <h3 className="titulo">{item.titulo}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="categoria">Categoría: {item.categoria}</p>
            <h2 className="precio">Precio: ${item.precio}</h2>
            <p>Stock Disponible: {item.stock}</p>
            <ItemCount
              cantidad={cantidad}
              handleRestar={handleRestar}
              handleSumar={handleSumar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
