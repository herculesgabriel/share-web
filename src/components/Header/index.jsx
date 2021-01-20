import { Link } from 'react-router-dom';

import './style.css';

const Header = () => (
  <header>
    <nav className="navbar">
    <Link to="/">
      <h1 className="logo" alt="share logo">Share</h1>
    </Link>
      <div className="menu">
        <Link to="/create-message">
          <button>Enviar Mensagem</button>
        </Link>
        {/* <Link to="/random">
          <button>Aleatório</button>
        </Link> */}
        <Link to="/about">
          <button>Sobre</button>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
