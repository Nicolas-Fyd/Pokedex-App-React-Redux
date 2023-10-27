import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'; // Importez 'compose'
import { devToolsEnhancer } from '@redux-devtools/extension';

import reducer from '../reducers';
import pokemonMiddleware from '../middlewares/pokemonMiddleware';

// Créez une liste des middlewares que vous souhaitez appliquer
const middlewares = [pokemonMiddleware];

// Utilisez composeEnhancers pour combiner les enchanceurs
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // reducer
  reducer,
  // enhancer
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export default store;
