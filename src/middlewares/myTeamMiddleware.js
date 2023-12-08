import axios from 'axios';
import { ADD_POKEMON_IN_MYTEAM, FETCH_MYTEAM, saveMyTeam } from '../actions/myTeam';

const myTeamMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MYTEAM:
      axios.get('http://localhost:3000/me/collection', {
        headers: { Authorization: `Bearer ${store.getState().user.token}` },
      })
        .then((response) => {
          store.dispatch(saveMyTeam(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    case ADD_POKEMON_IN_MYTEAM: {
      const { pokemonId } = action;
      axios.post('http://localhost:3000/me/collection', { pokemonId: pokemonId }, {
        headers: { Authorization: `Bearer ${store.getState().user.token}` },
      })
        .then((response) => {
          console.log('pokemon enregistré');
        })
        .catch((error) => {
          console.warn(error);
        });
    }
      break;
    default:
  }
  next(action);
};

export default myTeamMiddleware;
