import { useSelector, useDispatch } from 'react-redux';
import { changeSubmitField, submitSignup } from '../../../actions/user';
import SignUpForm from './SignUpForm';
import './styles.scss';
import ErrorMessage from '../ErrorMessage';
import SignUpFormBis from './SignUpFormBis';

function SignUp() {
  const errorMessage = useSelector((state) => state.error.errorMessage);

  return (
    <div className="sign-up">
      <SignUpFormBis />
      { errorMessage && <ErrorMessage severity="error" message={errorMessage} />}
    </div>
  );
}

export default SignUp;
