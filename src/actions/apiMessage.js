export const SAVE_ERROR_MESSAGE = 'SAVE_ERROR_MESSAGE';

export const saveErrorMessage = (error) => ({
  type: SAVE_ERROR_MESSAGE,
  errorMessage: error.message,
});
