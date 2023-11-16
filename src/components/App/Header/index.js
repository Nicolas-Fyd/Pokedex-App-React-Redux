import './styles.scss';
import logo from 'src/assets/logo2.png';

function Header() {
  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={logo} alt="react logo" />
      </a>
      <div className="form">
        <div className="login">Se connecter</div>
        <div className="signin">S'inscrire</div>
      </div>
    </div>
  );
}

export default Header;
