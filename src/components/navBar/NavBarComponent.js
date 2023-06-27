import './NavBarComponent.css'
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/genres" className={location.pathname === '/genres' ? 'active' : ''}>
            Generos
          </Link>
        </li>
        <li>
          <Link to="/platforms" className={location.pathname === '/platforms' ? 'active' : ''}>
            Plataformas
          </Link>
        </li>
      </ul>
    </nav>
  );
}