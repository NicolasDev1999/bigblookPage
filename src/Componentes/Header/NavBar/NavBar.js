import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NavBar.css";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">

    <div className="navbar-icon">
        <a href="/Page202409/">
        <motion.div
         className="box"
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.8,
           delay: 0.5,
           ease: [0, 0.71, 0.2, 1.01]
         }}>
          <img
            src={`${process.env.PUBLIC_URL}/icono (2).png`}
            alt="Logo"
            className="navbar-logo"
          />
          </motion.div>
        </a>
      </div>
      
      {!isMobile ? (
        <ul className="nav-links">
          <li className="navbar-item">
            <Link to="/BigBanner">Inicio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/BigGallery">Casas</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Gallery">Piscinas</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Formulario">Cantacto</Link>
          </li>
        </ul>
      ) : (
        <div className="mobile-nav">
          <Link to="/Banner" className="mobile-nav-item">
            Inicio
          </Link>
          <Link to="/About" className="mobile-nav-item">
            Sobre Mi
          </Link>
          <Link to="/Gallery" className="mobile-nav-item">
            Experiencia
          </Link>
          <Link to="/Formulario" className="mobile-nav-item">
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
