import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        {" "}
        <h1>Bebidas city</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/nosotros">
            Nosotros
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Vinos">
            Vinos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Licores">
            Licores
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Cervezas">
            Cervezas
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Espumantes">
            Espumantes
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
