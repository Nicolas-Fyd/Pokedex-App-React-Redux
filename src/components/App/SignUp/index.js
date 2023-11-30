import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SignUpForm from './SignUpForm';
import './styles.scss';
import ErrorMessage from '../ErrorMessage';
import { clearErrorMessage } from '../../../actions/apiMessage';

function SignUp() {
  const errorMessage = useSelector((state) => state.error.errorMessage);
  const dispatch = useDispatch();

  // Efface le message d'erreur lorsque le composant est démonté
  useEffect(() => () => {
    dispatch(clearErrorMessage());
  }, [dispatch]);

  return (
    <div className="sign-up">
      <SignUpForm />
      { errorMessage && <ErrorMessage severity="error" message={errorMessage} />}
    </div>
  );
}

export default SignUp;
