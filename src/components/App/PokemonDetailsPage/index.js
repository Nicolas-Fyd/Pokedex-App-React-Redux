import './styles.scss';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PokemonDetailsPage() {
  const { name } = useParams();
  const pokemons = useSelector((state) => state.pokedex.pokemons);
  const pokemon = pokemons.find((poke) => poke.name.toLowerCase() === name.toLowerCase());
  console.log(pokemon);

  // if (!pokemon) {
  //   return <Navigate to="/error" replace />;
  // }

  return (
    <div className="pokemon-details">
      Hello {pokemon.name}
    </div>
  );
}

export default PokemonDetailsPage;
