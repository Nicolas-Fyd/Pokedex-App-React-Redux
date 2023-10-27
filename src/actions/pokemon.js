export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const SAVE_POKEMONS = 'SAVE_POKEMONS';

export const fetchPokemons = () => ({
  type: FETCH_POKEMONS,
});

export const savePokemons = (pokemons) => ({
  type: SAVE_POKEMONS,
  pokemons: pokemons,
});
