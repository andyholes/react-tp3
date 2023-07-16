import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/footer/FooterComponent';
import Header from './components/header/HeaderComponent';
import NavBar from './components/navBar/NavBarComponent';
import DashboardPage from './pages/dashboard/DashboardPage';
import GenerosPage from './pages/genres/GenerosPage'
import PlataformasPage from './pages/platforms/PlataformasPage';
import axios from 'axios';
import GenreEditPage from './pages/genres/EditPage';
import PlatformEditPage from './pages/platforms/EditPage';

function App() {

  return (
    <div>
      <Header />
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<DashboardPage />} />
          <Route path="/genres" element={<GenerosPage />} />
          <Route path="/genres/edit" element={<GenreEditPage />} />
          <Route path="/platforms" element={<PlataformasPage />} />
          <Route path="/platforms/edit" element={<PlatformEditPage />} />
        </Routes>
      </Router>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
