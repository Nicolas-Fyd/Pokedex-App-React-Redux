import { CHANGE_FILTER_FIELD, SAVE_FILTER_FIELD, SAVE_POKEMONS } from '../actions/pokemon';

export const initialState = {
  pokemons: [],
  pokemonFilterName: '',
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
    default:
      return state;
  }
};

export default reducer;
