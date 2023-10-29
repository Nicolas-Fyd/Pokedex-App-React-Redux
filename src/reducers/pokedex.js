import {
  CHANGE_FILTER_FIELD,
  SAVE_POKEMONS,
  SAVE_TYPES,
  SAVE_TYPE_FILTERS,
  SELECT_TYPE_FILTERS,
} from '../actions/pokemon';

export const initialState = {
  pokemons: [],
  pokemonFilterName: '',
  types: [],
  filteredTypes: [],
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
    case SELECT_TYPE_FILTERS:
      return {
        ...state,
        filteredTypes: [...state.filteredTypes, action.newValue],
      };
    default:
      return state;
  }
};

export default reducer;
