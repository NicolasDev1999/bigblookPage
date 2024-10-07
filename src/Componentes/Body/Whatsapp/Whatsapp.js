import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 
import "./Whatsapp.css"
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573103002506" 
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp />
    </a>
  );
};
export default WhatsAppButton;
