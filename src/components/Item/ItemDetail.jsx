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
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={item.imagen}
              className="img-fluid rounded-start"
              alt={item.titulo}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.titulo}</h5>
              <p className="card-text">{item.descripcion}</p>
              <p className="card-text">
                <small className="text-muted">
                  Categoría: {item.categoria}
                </small>
              </p>
              <h2 className="card-text">Precio: ${item.precio}</h2>
              <p className="card-text">Stock Disponible: {item.stock}</p>
              <ItemCount
                cantidad={cantidad}
                handleRestar={handleRestar}
                handleSumar={handleSumar}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
