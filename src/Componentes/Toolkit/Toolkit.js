// src/components/Toolkit.js
import React, { useState } from 'react';
import './Toolkit.css';

const Toolkit = () => {
    const [fontSize, setFontSize] = useState('medium');
    const [isHighContrast, setIsHighContrast] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar el despliegue del toolkit

    const handleFontSizeChange = (size) => {
        setFontSize(size);
    };

    const toggleContrast = () => {
        setIsHighContrast((prev) => !prev);
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    const handleMouseEnter = () => {
        setIsExpanded(true); // Expandir el toolkit al hacer hover
    };

    const handleMouseLeave = () => {
        setIsExpanded(false); // Colapsar el toolkit al retirar el hover
    };

    return (
        <div
            className={`toolkit-container ${isExpanded ? 'expanded' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {!isExpanded && (
                <div className="toggle-arrow"></div> // Mostrar la flecha cuando no está expandido
            )}
            <div className="toolkit">
                <div>
                    <button onClick={() => handleFontSizeChange('small')}>A-</button>
                    <button onClick={() => handleFontSizeChange('medium')}>A</button>
                    <button onClick={() => handleFontSizeChange('large')}>A+</button>
                </div>
                <div>
                    <button onClick={toggleContrast}>
                        Texto: 
                        {isHighContrast ? 'Normal' : 'Alto Contraste'}
                    </button>
                </div>
                <div>
                    <button onClick={toggleDarkMode}>
                        Fondo:
                        {isDarkMode ? 'Modo Claro' : 'Normal'}
                    </button>
                </div>
            </div>
            <style>
            {`
    footer, body, navbar{
        font-size: ${fontSize === 'large' ? 'var(--font-size-large)' : 
                    fontSize === 'small' ? 'var(--font-size-small)' : 
                    'var(--font-size-medium)'};
        background: ${isDarkMode ? 'var(--my-gradient)' : 'var(--color-background)'};
        color: ${isHighContrast ? 'var(--color-contrast)' : 'var(--color-primary)'};
    }
    
     h1, h2, h3, h4, h5, h6 {
        font-size: ${fontSize === 'large' ? 'var(--font-size-h-large)' : 
                    fontSize === 'small' ? 'var(--font-size-h-small)' : 
                    'var(--font-size-h-medium)'};
        color: ${isHighContrast ? 'var(--color-contrast)' : 'var(--color-primary)'}!important;
    }

    .footer-section h1,{
     font-size: ${fontSize === 'large' ? 'var(--font-size-h-large)' : 
                    fontSize === 'small' ? 'var(--font-size-h-small)' : 
                    'var(--font-size-h-medium)'};
        color: ${isHighContrast ? 'var(--color-contrast)' : 'var(--color-primary)'}!important;
    }

    p {
        font-size: ${fontSize === 'large' ? 'var(--font-size-p-large)' : 
                    fontSize === 'small' ? 'var(--font-size-p-small)' : 
                    'var(--font-size-p-medium)'};
        color: ${isHighContrast ? 'var(--color-contrast)' : 'var(--color-primary)'};
    }

    a,.navbar-item a,.footer-section ul li a{
        font-size: ${fontSize === 'large' ? 'var(--font-size-a-large)' : 
                    fontSize === 'small' ? 'var(--font-size-a-small)' : 
                    'var(--font-size-a-medium)'};
        color: ${isHighContrast ? 'var(--color-contrast)' : 'var(--color-primary)'};
    }

    link {
        font-size: ${fontSize === 'large' ? 'var(--font-size-link-large)' : 
                    fontSize === 'small' ? 'var(--font-size-link-small)' : 
                    'var(--font-size-link-medium)'};
        color: ${isHighContrast ? 'var(--color-contrast)' : 'var(--color-primary)'};
    }

    span {
        font-size: ${fontSize === 'large' ? 'var(--font-size-span-large)' : 
                    fontSize === 'small' ? 'var(--font-size-span-small)' : 
                    'var(--font-size-span-medium)'};
        color: ${isHighContrast ? 'var(--color-contrast)' : 'var(--color-primary)'};
    }
`}

            </style>
        </div>
    );
};

export default Toolkit;
