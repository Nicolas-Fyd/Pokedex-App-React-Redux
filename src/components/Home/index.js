/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../Content';
import './styles.scss';
import { changeFilterField, fetchPokemons, fetchTypes, saveFilterField } from '../../actions/pokemon';
import PokemonFilterByName from '../PokemonFilterByName';
import PokemonFilterByType from '../PokemonFilterByType';

function Home() {
  const pokemons = useSelector((state) => state.pokedex.pokemons);
  const filter = useSelector((state) => state.pokedex.pokemonFilterName);
  const types = useSelector((state) => state.pokedex.types);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
    dispatch(fetchTypes());
  }, [filter]);

  // Filtrer les pokémons en fonction du champ de texte
  const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(filter));

  return (
    <div className="home">
      <h1 className="home-title">Liste des Pokémons</h1>
      <PokemonFilterByName
        filter={filter}
        changeField={(newValue) => {
          dispatch(changeFilterField(newValue));
        }}
      />
      <PokemonFilterByType types={types} />
      <Content pokemons={filter.length === 0 ? pokemons : filteredPokemons} /> {/* Si le filtre est vide on affiche tous les pokemons */}
    </div>
  );
}

export default Home;
