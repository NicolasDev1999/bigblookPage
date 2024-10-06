import React from 'react';
import { FaBuilding, FaHardHat, FaTools, FaClipboardList, FaFileContract, FaHome } from 'react-icons/fa'; // Íconos de construcción
import './Featured.css'; // Archivo CSS para los estilos

const Navbar = () => {
  return (
    <div className="featured-container">
      <nav className="featured">
        <ul className="featured-list">
          <li className="featured-item">
            <a href="/proyectos" className="featured-link">
              <FaBuilding className="featured-icon" />
              <span className="featured-text">Proyectos</span>
            </a>
          </li>
          <li className="featured-item">
            <a href="/equipos" className="featured-link">
              <FaHardHat className="featured-icon" />
              <span className="featured-text">Equipos</span>
            </a>
          </li>
          <li className="featured-item">
            <a href="/herramientas" className="featured-link">
              <FaTools className="featured-icon" />
              <span className="featured-text">Herramientas</span>
            </a>
          </li>
          <li className="featured-item">
            <a href="/presupuestos" className="featured-link">
              <FaClipboardList className="featured-icon" />
              <span className="featured-text">Presupuestos</span>
            </a>
          </li>
          <li className="featured-item">
            <a href="/contratos" className="featured-link">
              <FaFileContract className="featured-icon" />
              <span className="featured-text">Contratos</span>
            </a>
          </li>
          <li className="featured-item">
            <a href="/" className="featured-link">
              <FaHome className="featured-icon" />
              <span className="featured-text">Inicio</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
