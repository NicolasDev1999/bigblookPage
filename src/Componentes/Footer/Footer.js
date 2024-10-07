import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h1>Navegación</h1>
          <ul>
            <li>
              <Link to="/Banner">Inicio</Link>
            </li>
            <li>
              <Link to="/About">Acerca de nosotros</Link>
            </li>
            <li>
              <Link to="/Gallery">Experiencia</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h1>Contacto</h1>
          <ul className="contacto">
            <li>
              <a href="tel:+573215293348">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </li>
            <li>
              <a
                href="mailto:sergionicolasgalindocante@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaEnvelope size={24} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h1>Sígueme</h1>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaYoutube size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaTwitter size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 Todos los derechos reservados
        </p>
        <p className="made-in-react">
          &reg; BIGBLOOK INC 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
