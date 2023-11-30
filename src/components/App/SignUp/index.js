import { useSelector } from 'react-redux';
import SignUpForm from './SignUpForm';
import './styles.scss';
import ErrorMessage from '../ErrorMessage';

function SignUp() {
  const errorMessage = useSelector((state) => state.error.errorMessage);

  return (
    <div className="sign-up">
      <SignUpForm />
      { errorMessage && <ErrorMessage severity="error" message={errorMessage} />}
    </div>
  );
}

export default SignUp;
