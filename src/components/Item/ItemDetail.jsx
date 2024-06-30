import React from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
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
            <h3 className="precio">Precio: ${item.precio}</h3>
            <ItemCount item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
