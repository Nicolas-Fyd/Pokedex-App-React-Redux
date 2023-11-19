import logo from 'src/assets/logo2.png';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import './styles.scss';
import { changeLoginField } from '../../../actions/user';

function Header() {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const dispatch = useDispatch();

  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={logo} alt="react logo" />
      </a>
      <LoginForm
        email={email}
        password={password}
        changeField={(newValue, identifier) => {
          dispatch(changeLoginField(newValue, identifier));
        }}
        handleLogin={() => {
          console.log('handleLogin');
        }}
        handleLogout={() => {
          console.log('handleLogout');
        }}
       />
    </div>
  );
}

export default Header;
