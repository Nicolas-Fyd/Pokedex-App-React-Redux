import { SAVE_POKEMONS } from '../actions/pokemon';

export const initialState = {
  pokemons: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POKEMONS:
      return {
        ...state,
        pokemons: action.pokemons,
      };
    default:
      return state;
  }
};

export default reducer;
