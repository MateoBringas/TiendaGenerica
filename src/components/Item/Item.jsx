import React from "react";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="producto">
      <img src={producto.imagen} />
      <h4>{producto.titulo}</h4>
      <h3>Precio: ${producto.precio}</h3>
      <p>Categoria: {producto.categoria}</p>
      <Link className="ver-mas" to={`/item/${producto.id}`}>
        Ver mas
      </Link>
    </div>
  );
}

export default Item;
