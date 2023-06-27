import './DashboardPage.css'
import Card from '../../components/card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DashboardPage() {
   const [game, setGame] = useState(null);

   useEffect(() => {
      axios.get('https://api.example.com/game-data')
        .then(response => {
          setGame(response.data);
        })
        .catch(error => {
          console.error('Error fetching game data:', error);
        });
    }, []);
  
    return (
      <div className="app">
        {game && <Card game={game} />}
      </div>
    );
    
  }

  