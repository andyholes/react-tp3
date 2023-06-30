import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/footer/FooterComponent';
import Header from './components/header/HeaderComponent';
import NavBar from './components/navBar/NavBarComponent';
import DashboardPage from './pages/dashboard/DashboardPage';
import GenerosPage from './pages/generos/GenerosPage';
import PlataformasPage from './pages/plataformas/PlataformasPage';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GenreEditPage from './pages/generos/EditPage';

function App() {
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

  return (
    <div>
      <Header />
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<DashboardPage />} />
          <Route path="/genres" element={<GenerosPage />} />
          <Route path="/genres/edit" element={<GenreEditPage />} />
          <Route path="/platforms" element={<PlataformasPage platforms={platforms}/>} />
        </Routes>
      </Router>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
