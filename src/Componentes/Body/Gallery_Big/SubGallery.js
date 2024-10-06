// src/components/Gallery/SubGallery.js

import React from 'react';
import { motion } from 'framer-motion';
import './SubGallery.css'; // Asegúrate de que los estilos sean aplicables

const SubGallery = ({ images, onClose }) => {
  return (
    <div className="sub-gallery">
      <button onClick={onClose} className="close-button">Cerrar</button>
      <div className="sub-gallery-content">
        {images.map((image, index) => (
          <motion.div
            className="sub-gallery-item"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={image} alt={`Sub gallery item ${index + 1}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubGallery;
