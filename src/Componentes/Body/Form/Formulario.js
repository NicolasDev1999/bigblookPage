import React, { useState } from 'react';
import axios from 'axios';
import "./Formulario.css" ;

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/mensajes', formData)
      .then(response => {
        alert('Mensaje enviado con éxito');
        setFormData({
          nombre: '',
          correo: '',
          mensaje: ''
        });
      })
      .catch(error => {
        console.error('Hubo un error al enviar el mensaje', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='textNombre'>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </div>
      <div className='textCorreo'>
        <label>Correo:</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
      </div>
      <div className='texTareaMensaje'>
        <label>Mensaje:</label>
        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
