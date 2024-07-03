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
              <Link className="nav-link" to="/productos/Vinos">
                Vinos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/Licores">
                Licores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/Cervezas">
                Cervezas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/Espumantes">
                Espumantes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/administrador">
                Administrador
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
