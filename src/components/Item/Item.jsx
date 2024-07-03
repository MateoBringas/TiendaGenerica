import React from "react";
import { Link } from "react-router-dom";
import "../../main.css";

function Item({ producto }) {
  return (
    <div className="card" style={{ width: "16rem", height: "30rem" }}>
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.titulo}
      />
      <div className="card-body">
        <h4 className="card-title">{producto.titulo}</h4>
        <h3 className="card-text">Precio: ${producto.precio}</h3>
        <p className="card-text">Categoria: {producto.categoria}</p>
      </div>
      <div className="card-footer">
        <Link className="btn btn-outline-secondary" to={`/item/${producto.id}`}>
          Comprar
        </Link>
      </div>
    </div>
  );
}
export default Item;
