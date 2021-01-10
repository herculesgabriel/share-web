import { Link } from 'react-router-dom';

import shareLogo from '../../assets/images/share.svg';
import './style.css';

const Header = () => (
  <header>
    <nav className="navbar">
      <img className="logo" src={shareLogo} alt="share logo" />

      <div className="menu">
        <Link to="/">
          <button className="current-page">Recentes</button>
        </Link>
        <Link to="/random">
          <button>Aleatório</button>
        </Link>
        <Link to="/about">
          <button>Sobre</button>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
