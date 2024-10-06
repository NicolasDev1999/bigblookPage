import { useState, useEffect } from 'react';
import './BigBanner.css';

const BigBanner = () => {
  const images = [
    `${process.env.PUBLIC_URL}/imagenes/casas/casa (4).jpeg`,
    `${process.env.PUBLIC_URL}/imagenes/casas/casa (2).jpeg`,
    `${process.env.PUBLIC_URL}/imagenes/casas/casa (3).jpeg`
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia de imagen cada 5 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='bigbanner_content'>
      <div className='gallery_background-bigblook'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`imagen_background_Big-banner-${index}`}
            className={`background_image ${index === currentImageIndex ? 'visible' : 'hidden'}`}
          />
        ))}
      </div>
      <div className='text_banner-bigblok'>
        <h2>Bigblook</h2>
        <p>Construcción industrializada</p>
      </div>
    </div>
  );
}

export default BigBanner;
