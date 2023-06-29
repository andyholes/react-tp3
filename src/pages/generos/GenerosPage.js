import "./GenerosPage.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GenerosPage(){
    const [genres, setGenres] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:3000/app/genres")
        .then(response => {
          setGenres(response.data);
        })
        .catch(error => {
          console.error('Error fetching genre data:', error);
        });
      },[]);

      const navigate = useNavigate();
      const handleEdit = (genre) => {
        navigate('/genres/edit', { state: { genre: genre } });
    };

    const handleDelete = (id) => {
        console.log(id);
        axios.delete("http://localhost:3000/app/genres/"+id)
        .then(setGenres(prevGenres => prevGenres.filter(genre => genre.id !== id)
        ))
        .catch(error => {
            console.error('Error fetching genre data:', error);
        });
    };

    return (
        <div className="genres">
        {genres.map((genre) => (
            <div className="genero" key={genre.id}>
            <h2>{genre.nombre}</h2>
            {console.log(genre)}
            <button onClick={() => handleEdit(genre)}>Editar</button>
            <button onClick={() => handleDelete(genre.id)}>Eliminar</button>
            </div>
        ))}
        </div>
      );
}