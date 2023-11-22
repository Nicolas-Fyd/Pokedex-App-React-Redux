import { CHANGE_LOGIN_FIELD, DELETE_AUTH_DATA, SAVE_AUTH_DATA } from '../actions/user';

export const initialState = {
  isLogged: false,
  email: '',
  password: '',
  pseudo: '',
  token: '',
  roleId: '',
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
    default:
      return state;
  }
};

export default reducer;
