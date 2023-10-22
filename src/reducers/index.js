/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';

import pokedexReducer from './pokedex';
import userReducer from './user';

const rootReducer = combineReducers({
  pokedex: pokedexReducer,
  user: userReducer,
});

export default rootReducer;
