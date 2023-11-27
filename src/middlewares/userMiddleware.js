/* eslint-disable max-len */
import axios from 'axios';
import { SUBMIT_LOGIN, SUBMIT_SIGNUP, saveAuthData } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        'http://localhost:3000/sign-in',
        {
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          store.dispatch(saveAuthData(response.data.pseudo, response.data.role_id, response.data.accessToken));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    case SUBMIT_SIGNUP:
      const {
        signUpPseudo,
        signUpEmail,
        signUpPassword,
        signUpConfirmpassword,
      } = store.getState().user;
      axios.post(
        'http://localhost:3000/sign-up',
        {
          pseudo: signUpPseudo,
          email: signUpEmail,
          password: signUpPassword,
          confirmpassword: signUpConfirmpassword,
        },
      )
        .then((response) => {
          console.log('Compte créé');
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:
  }
  next(action);
};

export default userMiddleware;
