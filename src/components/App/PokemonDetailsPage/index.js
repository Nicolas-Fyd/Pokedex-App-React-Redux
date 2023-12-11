import './styles.scss';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PokemonDetails from './PokemonDetails';

function PokemonDetailsPage() {
  const { name } = useParams();
  const pokemons = useSelector((state) => state.pokedex.pokemons);
  const pokemon = pokemons.find((poke) => poke.name.toLowerCase() === name.toLowerCase());

  if (!pokemon) {
    return <Navigate to="/error" replace />;
  }

  return (
    <div className="pokemon-details-page">
      <PokemonDetails pokemon={pokemon} />
    </div>
  );
}

export default PokemonDetailsPage;
