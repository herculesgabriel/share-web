import shareLogo from '../../assets/images/share.svg';
import './style.css';

const Header = () => (
  <header>
    <nav className="navbar">
      <img className="logo" src={shareLogo} alt="share logo" />

      <div className="menu">
        <a href="/">
          <button className="current-page">Aleatório</button>
        </a>
        <a href="/recent">
          <button>Recentes</button>
        </a>
        <a href="/about">
          <button>Sobre</button>
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
