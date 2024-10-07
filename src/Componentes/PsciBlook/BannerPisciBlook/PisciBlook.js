import React from 'react';
import './PisciBlook.css'; // Importa los estilos para el componente

const PisciBlook = () => {
  return (
    <div className="pisciBlook-container">
      {/* Ícono en la parte superior */}
      

      {/* Navbar personalizado */}
      <nav className="pisciBlook-navbar">
      <div className="pisciBlook-icon">
        <img src="./imagenes/PisciBlook.png" alt="Icono PisciBlook" className="pisciBlook-img" />
      </div>
        <ul className="pisciBlook-navbar-list">
          <li><a href="#section1">Sección 1</a></li>
          <li><a href="#section2">Sección 2</a></li>
          <li><a href="#section3">Sección 3</a></li>
        </ul>
      </nav>

      {/* Banner */}
      <div className="pisciBlook-banner">
        <h1>Bienvenidos a PISCIBLOCK</h1>
        <p>Una sección especial para explorar nuestro contenido único.</p>
      </div>
    </div>
  );
};

export default PisciBlook;
