import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function GenreEditPage(){
    const [message, setMessage] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
    const location = useLocation();
    const genre = location.state?.genre || '';
    const navigate = useNavigate();

    if (submittedValue === ''){
        setSubmittedValue(genre.nombre);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!inputValue) {
          setMessage('El nombre no puede estar vacío.');
          return;
        }

        try {
          axios.put(`http://localhost:3000/app/genres/${genre.id}`, { nombre: inputValue });
          setMessage('Género actualizado exitosamente.');
          setSubmittedValue(inputValue);
        } catch (error) {
          setMessage('Error al actualizar el género.');
          console.log('Error updating genre:', error);
        }
      };

      const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

      const handleGoBack = () => {
        navigate('/genres');
      };

    return (
        <div>
          <h2>Editar Género</h2>
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