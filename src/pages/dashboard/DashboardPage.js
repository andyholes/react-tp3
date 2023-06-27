import './DashboardPage.css'
import Card from '../../components/card/Card';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DashboardPage() {
   const [games, setGames] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:3000/app/games')
        .then(response => {
          console.log('Received game data:', response.data);
          setGames(response.data);
        })
        .catch(error => {
          console.error('Error fetching game data:', error);
        });
    }, []);

    console.log('Games:', games);

    return (
      <div className="lista">
        {games.map(game => (
        <Card key={game.id} game={game} />
      ))}
      </div>
    );

  }

  