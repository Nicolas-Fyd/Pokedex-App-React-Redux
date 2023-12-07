import { SAVE_MYTEAM } from '../actions/myTeam';

export const initialState = {
  myPokemons: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MYTEAM:
      return {
        ...state,
        myPokemons: action.pokemons,
        // isPokemonsLoaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
