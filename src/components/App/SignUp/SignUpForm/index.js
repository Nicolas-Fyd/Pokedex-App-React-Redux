import PropTypes from 'prop-types';
import './styles.scss';
import Field from '../../Header/LoginForm/Field';

function SignUpForm({
  pseudo,
  email,
  password,
  confirmPassword,
  changeField,
  handleSignUp,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignUp();
  };

  return (
    <div className="signup-form">
      <form autoComplete="off" className="signup-form-element" onSubmit={handleSubmit}>
        <Field
          name="signUpPseudo"
          placeholder="Pseudo"
          onChange={changeField}
          value={pseudo}
        />
        <Field
          name="signUpEmail"
          placeholder="Adresse Email"
          onChange={changeField}
          value={email}
        />
        <Field
          name="signUpPassword"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <Field
          name="signUpConfirmpassword"
          type="password"
          placeholder="Confirmer le mot de passe"
          onChange={changeField}
          value={confirmPassword}
        />
        <button
          type="submit"
          className="signup-form-button"
        >
          OK
        </button>
      </form>
    </div>
  );
}

SignUpForm.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};

SignUpForm.defaultProps = {
};

export default SignUpForm;
