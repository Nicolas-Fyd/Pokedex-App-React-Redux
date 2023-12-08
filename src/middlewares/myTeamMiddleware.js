import axios from 'axios';
import { FETCH_MYTEAM, saveMyTeam } from '../actions/myTeam';

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
    default:
  }
  next(action);
};

export default myTeamMiddleware;
