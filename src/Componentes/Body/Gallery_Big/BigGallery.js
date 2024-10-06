// src/components/Gallery/Gallery.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SubGallery from './SubGallery'; // Importa el nuevo componente
import './BigGallery.css';

const images = [
  './imagenes/casas/casa (2).jpeg',
  './imagenes/casas/casa (3).jpeg',
  './imagenes/casas/casa (4).jpeg',
  './imagenes/casas/casa (5).jpeg',
  './imagenes/casas/casa (6).jpeg',
  './imagenes/casas/casa (7).jpeg',
  './imagenes/casas/casa (8).jpeg',
  './imagenes/casas/casa (9).jpeg',
];

// Ejemplo de imágenes para cada subgalería
const subGalleryImages = {
  0: ['./imagenes/casas/casa (2).jpeg', './imagenes/casas/casa (3).jpeg'],
  1: ['./imagenes/casas/sub2-1.jpeg', './imagenes/casas/sub2-2.jpeg'],
  2: ['./imagenes/casas/sub2-1.jpeg', './imagenes/casas/sub2-2.jpeg'],
  3: ['./imagenes/casas/sub2-1.jpeg', './imagenes/casas/sub2-2.jpeg'],
  4: ['./imagenes/casas/sub2-1.jpeg', './imagenes/casas/sub2-2.jpeg'],
  5: ['./imagenes/casas/sub2-1.jpeg', './imagenes/casas/sub2-2.jpeg'],
  6: ['./imagenes/casas/sub2-1.jpeg', './imagenes/casas/sub2-2.jpeg'],
  7: ['./imagenes/casas/sub2-1.jpeg', './imagenes/casas/sub2-2.jpeg'],
  // Agrega más subgalerías según sea necesario
};

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [showSubGallery, setShowSubGallery] = useState(false);

  const openSubGallery = (index) => {
    setSelectedImages(subGalleryImages[index] || []);
    setShowSubGallery(true);
  };

  const closeSubGallery = () => {
    setShowSubGallery(false);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <motion.div
          className="gallery-item"
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => openSubGallery(index)} // Abre subgalería al hacer clic
        >
          <img src={image} alt={`Gallery item ${index + 1}`} />
        </motion.div>
      ))}
      {showSubGallery && (
        <SubGallery images={selectedImages} onClose={closeSubGallery} />
      )}
    </div>
  );
};

export default Gallery;
