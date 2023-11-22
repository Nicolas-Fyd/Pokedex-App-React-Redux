export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';

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
