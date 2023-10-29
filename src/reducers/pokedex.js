import { CHANGE_FILTER_FIELD, SAVE_POKEMONS, SAVE_TYPES } from '../actions/pokemon';

export const initialState = {
  pokemons: [],
  pokemonFilterName: '',
  types: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POKEMONS:
      return {
        ...state,
        pokemons: action.pokemons,
      };
    case CHANGE_FILTER_FIELD:
      return {
        ...state,
        pokemonFilterName: action.newValue,
      };
    case SAVE_TYPES:
      return {
        ...state,
        types: action.types,
      };
    default:
      return state;
  }
};

export default reducer;
