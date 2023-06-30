import './DashboardPage.css';
import Card from '../../components/card/Card';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DashboardPage() {
  const [games, setGames] = useState([]);
  const [params, setParams] = useState({
    nombre: '',
    genero: '',
    plataforma: '',
    ordenar: ''
  });
  const [generoOptions, setGeneroOptions] = useState([]);
  const [plataformaOptions, setPlataformaOptions] = useState([]);
  const [ordenarOptions, setOrdenarOptions] = useState([]);

  useEffect(() => {
    fetchGeneroOptions();
    fetchPlataformaOptions();
    fetchOrdenarOptions();
  }, []);

  const fetchGames = () => {
    const queryString = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');

    axios.get('http://localhost:3000/app/games?'+{queryString})
      .then(response => {
        console.log('Received game data:', response.data);
        setGames(response.data);
        setParams(prevParams => ({
          ...prevParams,
          nombre: '',
          genero: '',
          plataforma: '',
          ordenar: ''
        }));
      })
      .catch(error => {
        console.error('Error fetching game data:', error);
      });
  };

  const fetchGeneroOptions = () => {
    axios.get('http://localhost:3000/app/genres')
      .then(response => {
        console.log('Received genero options:', response.data);
        setGeneroOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching genero options:', error);
      });
  };

  const fetchPlataformaOptions = () => {
    axios.get('http://localhost:3000/app/platforms')
      .then(response => {
        console.log('Received plataforma options:', response.data);
        setPlataformaOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching plataforma options:', error);
      });
  };

  const fetchOrdenarOptions = () => {
    const options = [
      { value: '', label: 'Ordenar' },
      { value: 'asc', label: 'Ascendente' },
      { value: 'desc', label: 'Descendente' }
    ];
    setOrdenarOptions(options);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    fetchGames();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  console.log('Games:', games);

  return (
    <div className="dashboard">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={params.nombre}
          onChange={handleInputChange}
        />
        <select
          name="genero"
          value={params.genero}
          onChange={handleInputChange}
        >
          <option value="">Todos los géneros</option>
          {generoOptions.map(option => (
            <option key={option.id} value={option.id}>{option.nombre}</option>
          ))}
        </select>
        <select
          name="plataforma"
          value={params.plataforma}
          onChange={handleInputChange}
        >
          <option value="">Todas las plataformas</option>
          {plataformaOptions.map(option => (
            <option key={option.id} value={option.id}>{option.nombre}</option>
          ))}
        </select>
        <select
          name="ordenar"
          value={params.ordenar}
          onChange={handleInputChange}
        >
          {ordenarOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
      <div className="lista">
        {games.map(game => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
