import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function GenreEditPage(){
    const [message, setMessage] = useState('');
    const [inputValue, setInputValue] = useState('');
    const location = useLocation();
    const genre = location.state?.genre || '';

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!inputValue) {
          setMessage('El nombre no puede estar vacío.');
          return;
        }
    
        try {
          axios.put(`http://localhost:3000/app/genres/${genre.id}`, { nombre: inputValue });
          setMessage('Género actualizado exitosamente.');
        } catch (error) {
          setMessage('Error al actualizar el género.');
          console.log('Error updating genre:', error);
        }
      };

      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

    return (
        <div>
          <h2>Editar Género</h2>
          <p>Nombre actual: {genre.nombre}</p>
          <form onSubmit={handleSubmit}>
            <label>
              Nombre nuevo:
              <input type="text" value={inputValue} onChange={handleInputChange} />
            </label>
            <button type="submit">Guardar</button>
          </form>
          <p>{message}</p>
        </div>
      );
}