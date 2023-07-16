import "./PlataformasPage.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlataformasPage(){
    const [platforms, setPlatforms] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:3000/app/platforms")
        .then(response => {
          setPlatforms(response.data);
        })
        .catch(error => {
          console.error('Error fetching platform data:', error);
        });
      },[]);

      const navigate = useNavigate();
      const handleEdit = (platform) => {
        navigate('/platforms/edit', { state: { platform: platform } });
    };

    const handleDelete = (id) => {
        console.log(id);
        axios.delete("http://localhost:3000/app/platforms/"+id)
        .then(setPlatforms(prevPlatform => prevPlatform.filter(platform => platform.id !== id)
        ))
        .catch(error => {
            console.error('Error fetching platform data:', error);
        });
    };

    return (
        <div className="platform">
        {platforms.map((platform) => (
            <div className="plataforma" key={platform.id}>
            <h2>{platform.nombre}</h2>
            {console.log(platform)}
            <button onClick={() => handleEdit(platform)}>Editar</button>
            <button onClick={() => handleDelete(platform.id)}>Eliminar</button>
            </div>
        ))}
        </div>
      );
}