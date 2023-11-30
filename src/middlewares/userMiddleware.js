/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import axios from 'axios';
import { SUBMIT_LOGIN, SUBMIT_SIGNUP, deleteSignupInformations, saveAuthData } from '../actions/user';
import { saveErrorMessage } from '../actions/apiMessage';

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
      const datas = store.getState().user.dataSignUp;
      console.log(datas);
      axios.post(
        'http://localhost:3000/sign-up',
        datas,
      )
        .then((response) => {
          store.dispatch(deleteSignupInformations());
          console.log('Compte créé');
        })
        .catch((error) => {
          store.dispatch(saveErrorMessage(error.response.data));
          console.warn(error);
        });
      break;
    default:
  }
  next(action);
};

export default userMiddleware;
