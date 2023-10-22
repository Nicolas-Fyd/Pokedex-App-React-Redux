import './styles.scss';
import logo from 'src/assets/logo.png';

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="react logo" />
      <div className="form">
        <div className="login">Se connecter</div>
        <div className="signin">S'inscrire</div>
      </div>
    </div>
  );
}

export default Header;
