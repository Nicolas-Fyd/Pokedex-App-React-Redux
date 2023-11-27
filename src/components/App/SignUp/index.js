import { changeSubmitField, submitSignup } from '../../../actions/user';
import SignUpForm from './SignUpForm';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';

function SignUp() {
  const {
    signUpPseudo, signUpEmail, signUpPassword, signUpConfirmpassword,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div className="sign-up">
      <SignUpForm
        pseudo={signUpPseudo}
        email={signUpEmail}
        password={signUpPassword}
        confirmPassword={signUpConfirmpassword}
        changeField={(newValue, identifier) => {
          dispatch(changeSubmitField(newValue, identifier));
        }}
        handleSignUp={() => {
          dispatch(submitSignup());
        }}
      />
    </div>
  );
}

export default SignUp;
