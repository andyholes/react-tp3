import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PlatformEditPage(){
    const [message, setMessage] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
    const location = useLocation();
    const platform = location.state?.platform || '';
    const navigate = useNavigate();

    if (submittedValue === ''){
        setSubmittedValue(platform.nombre);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!inputValue) {
          setMessage('El nombre no puede estar vacío.');
          return;
        }

        try {
          axios.put(`http://localhost:3000/app/platforms/${platform.id}`, { nombre: inputValue });
          setMessage('Plataforma actualizado exitosamente.');
          setSubmittedValue(inputValue);
        } catch (error) {
          setMessage('Error al actualizar la plataforma.');
          console.log('Error updating platform:', error);
        }
      };

      const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

      const handleGoBack = () => {
        navigate('/platform');
      };

    return (
        <div>
          <h2>Editar Plataforma</h2>
          <p>Nombre actual: {submittedValue}</p>
          <form onSubmit={handleSubmit}>
            <label>
              Nombre nuevo:
              <input type="text" value={inputValue} onChange={handleInputChange} />
            </label>
            <button type="submit">Guardar</button>
          </form>
          <button onClick={handleGoBack}>Volver</button>
          <p>{message}</p>
        </div>
      );
}