export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const DELETE_AUTH_DATA = 'DELETE_AUTH_DATA';
export const CHANGE_SUBMIT_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';

export const changeLoginField = (newValue, identifier) => ({
  type: CHANGE_LOGIN_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveAuthData = (pseudo, roleId, accesstoken) => ({
  type: SAVE_AUTH_DATA,
  pseudo: pseudo,
  roleId: roleId,
  token: accesstoken,
});

export const deleteAuthData = () => ({
  type: DELETE_AUTH_DATA,
});

export const changeSubmitField = (newValue, identifier) => ({
  type: CHANGE_SUBMIT_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const submitSignup = () => ({
  type: SUBMIT_SIGNUP,
});
