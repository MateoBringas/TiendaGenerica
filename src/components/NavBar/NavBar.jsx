import React from "react";
import { Link } from "react-router-dom";
import "../../main.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-custom">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Bebidas City
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/vinos">
                Vinos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/licores">
                Licores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/cervezas">
                Cervezas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/espumantes">
                Espumantes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
