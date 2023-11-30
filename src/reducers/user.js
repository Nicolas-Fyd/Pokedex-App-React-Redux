import { CHANGE_LOGIN_FIELD, DELETE_AUTH_DATA, DELETE_SIGNUP_INFORMATIONS, SAVE_AUTH_DATA, SAVE_SIGNUP_INFORMATIONS } from '../actions/user';

export const initialState = {
  isLogged: false,
  email: '',
  password: '',
  pseudo: '',
  token: '',
  roleId: null,
  dataSignUp: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        // property_accessors
        [action.identifier]: action.newValue,
      };
    case SAVE_AUTH_DATA:
      return {
        ...state,
        pseudo: action.pseudo,
        roleId: action.roleId,
        token: action.token,
        isLogged: true,
        email: '',
        password: '',
      };
    case DELETE_AUTH_DATA:
      return {
        ...state,
        pseudo: '',
        roleId: null,
        token: '',
        isLogged: false,
      };
    case SAVE_SIGNUP_INFORMATIONS:
      return {
        ...state,
        dataSignUp: action.dataSignUp,
      };
    case DELETE_SIGNUP_INFORMATIONS:
      return {
        ...state,
        dataSignUp: null,
      };
    default:
      return state;
  }
};

export default reducer;
