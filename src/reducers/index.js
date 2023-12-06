/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';

import pokedexReducer from './pokedex';
import userReducer from './user';
import errorReducer from './error';
import successMessageReducer from './successMessage';

const rootReducer = combineReducers({
  pokedex: pokedexReducer,
  user: userReducer,
  error: errorReducer,
  successMessage: successMessageReducer,
});

export default rootReducer;
