import { CHANGE_LOGIN_FIELD } from '../actions/user';

export const initialState = {
  isLogged: false,
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        // property_accessors
        [action.identifier]: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
