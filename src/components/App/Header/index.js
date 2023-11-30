import logo from 'src/assets/logo2.png';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import './styles.scss';
import { changeLoginField, deleteAuthData, submitLogin } from '../../../actions/user';

function Header() {
  const {
    email, password, isLogged, pseudo,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={logo} alt="react logo" />
      </a>
      <div className="connexion">
        <LoginForm
          email={email}
          password={password}
          changeField={(newValue, identifier) => {
            dispatch(changeLoginField(newValue, identifier));
          }}
          handleLogin={() => {
            dispatch(submitLogin());
          }}
          handleLogout={() => {
            dispatch(deleteAuthData());
          }}
          isLogged={isLogged}
          loggedMessage={`Bienvenue ${pseudo}`}
        />
        <a href="/sign-up" className="registration">Pas encore inscrit ?</a>
      </div>
    </div>
  );
}

export default Header;
