import axios from "axios";
import { FETCH_POKEMONS, savePokemons } from '../actions/pokemon';

const pokemonMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      axios.get('http://localhost:3000/pokemon')
        .then((response) => {
          store.dispatch(savePokemons(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:
  }
  next(action);
};

export default pokemonMiddleware;
