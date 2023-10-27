/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../Content';
import './styles.scss';
import { changeFilterField, fetchPokemons, saveFilterField } from '../../actions/pokemon';
import PokemonFilterByName from '../PokemonFilterByName';

function Home() {
  const pokemons = useSelector((state) => state.pokedex.pokemons);
  const filter = useSelector((state) => state.pokedex.pokemonFilterName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [filter]);

  // Filtrer les pokémons en fonction du champ de texte
  const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(filter));
  console.log(filteredPokemons);

  return (
    <div className="home">
      <h1 className="home-title">Liste des Pokémons</h1>
      <PokemonFilterByName
        filter={filter}
        changeField={(newValue) => {
          dispatch(changeFilterField(newValue));
        }}
      />
      <Content pokemons={filter.length === 0 ? pokemons : filteredPokemons} /> {/* Si le filtre est vide on affiche tous les pokemons */}
    </div>
  );
}

export default Home;
