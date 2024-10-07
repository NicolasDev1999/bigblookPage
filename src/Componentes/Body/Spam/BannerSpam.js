import React, { useState } from 'react';
import './BannerSpam.css'; // Archivo CSS para la animación

const BannerSpam = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    visible && (
      <div className="banner-spam">
        <div className="banner-spam-content">
          <p>¡Aprovecha nuestras ofertas de tiempo limitado! 🎉</p>
          <button className="banner-spam-close-button" onClick={handleClose}>
            X
          </button>
        </div>
      </div>
    )
  );
};

export default BannerSpam;
