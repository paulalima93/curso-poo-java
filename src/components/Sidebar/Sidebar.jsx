import React from "react";
import { Link } from "react-router-dom"; // <- IMPORTAR Link
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Curso POO Java</h2>
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/capitulo1">Capítulo 1</Link>
        </li>
        <li>
          <Link to="/capitulo2">Capítulo 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
