export const FETCH_MYTEAM = 'FETCH_MYTEAM';
export const SAVE_MYTEAM = 'SAVE_MYTEAM';

export const fetchMyTeam = () => ({
  type: FETCH_MYTEAM,
});

export const saveMyTeam = (pokemons) => ({
  type: SAVE_MYTEAM,
  pokemons: pokemons,
});
