import './NavBarComponent.css'
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : 'link'}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/genres" className={location.pathname.startsWith('/genres') ? 'active' : 'link'}>
            Generos
          </Link>
        </li>
        <li>
          <Link to="/platforms" className={location.pathname.startsWith('/platforms') ? 'active' : 'link'}>
            Plataformas
          </Link>
        </li>
      </ul>
    </nav>
  );
}