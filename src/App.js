import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/footer/FooterComponent';
import Header from './components/header/HeaderComponent';
import NavBar from './components/navBar/NavBarComponent';
import DashboardPage from './pages/dashboard/DashboardPage';
import GenerosPage from './pages/generos/GenerosPage';
import PlataformasPage from './pages/plataformas/PlataformasPage';

function App() {

  return (
    <div>
      <Header />
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<DashboardPage />} />
          <Route path="/genres" element={<GenerosPage />} />
          <Route path="/platforms" element={<PlataformasPage />} />
        </Routes>
      </Router>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
