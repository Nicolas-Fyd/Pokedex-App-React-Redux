import logo from 'src/assets/logo2.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import './styles.scss';
import { changeLoginField, deleteAuthData, submitLogin } from '../../../actions/user';
import ErrorMessage from '../ErrorMessage';
import { clearErrorMessage } from '../../../actions/apiMessage';

function Header() {
  const {
    email, password, isLogged, pseudo,
  } = useSelector((state) => state.user);
  const errorMessage = useSelector((state) => state.error.errorMessage);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Efface le message d'erreur lorsque l'URL change
  useEffect(() => {
    const unlisten = navigate(() => {
      dispatch(clearErrorMessage());
    });

    // Nettoyage de l'écouteur lorsque le composant est démonté
    return () => {
      unlisten();
    };
  }, [navigate]);

  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={logo} alt="react logo" />
      </a>
      { errorMessage && <ErrorMessage severity="error" message={errorMessage} />}
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
