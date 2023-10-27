export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const SAVE_POKEMONS = 'SAVE_POKEMONS';
export const CHANGE_FILTER_FIELD = 'CHANGE_FILTER_FIELD';

export const fetchPokemons = () => ({
  type: FETCH_POKEMONS,
});

export const savePokemons = (pokemons) => ({
  type: SAVE_POKEMONS,
  pokemons: pokemons,
});

export const changeFilterField = (newValue) => ({
  type: CHANGE_FILTER_FIELD,
  newValue: newValue,
});
