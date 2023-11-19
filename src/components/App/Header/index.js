import logo from 'src/assets/logo2.png';
import LoginForm from './LoginForm';
import './styles.scss';

function Header() {
  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={logo} alt="react logo" />
      </a>
      <LoginForm />
    </div>
  );
}

export default Header;
