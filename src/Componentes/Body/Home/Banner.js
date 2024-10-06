import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import './Banner.css';

const Banner = () => {
  
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Conozca a detalle sobre nuestros porcesos', 'Casas prefabricadas', 'Sistema modular'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <motion.div className="banner"
    initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <div className='banner-text'>
            <h1>Bienvenido</h1>
            <p><span className="changing-text">{texts[textIndex]}</span></p>
        </div>
        <div className="banner-image"></div>
      
    </motion.div>
    
  );
};

export default Banner;
