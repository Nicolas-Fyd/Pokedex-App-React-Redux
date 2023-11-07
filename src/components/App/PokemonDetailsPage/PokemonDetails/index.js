import PropTypes from 'prop-types';
import PokemonDetailsGauge from './PokemonDetailsGauge';
import './styles.scss';

function PokemonDetailsPage({ pokemon }) {
  return (
    <div className="pokemon-details">
      <h1 className="pokemon-details-title">Détails de {pokemon.name}</h1>
      <div className="pokemon-details-div">
        <div className="pokemons-details-left">
          <img src={pokemon.image} alt={pokemon.name} className="pokemon-details-img" />
          <div className="pokemon-details-statistics">
            {Object.keys(pokemon.stats).map((statName) => (
              <div className="pokemon-details-statistics-bloc" key={statName}>
                <span className="pokemon-details-statistic-name">{statName
                  .split('_')
                  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                  .join('_')}
                </span>
                <PokemonDetailsGauge value={pokemon.stats[statName]} />
              </div>
            ))}
          </div>
        </div>
        <div className="pokemon-details-right">
          <h2 className="pokemon-details-right-title">#{pokemon.id} {pokemon.name}</h2>
          <div className="pokemon-details-description">{pokemon.description}</div>
          <h3 className="pokemon-details-types-title">Types</h3>
          <div className="pokemon-details-right-types">
            {pokemon.types.map((type) => (
              <a
                key={type.color}
                className="pokemon-details-right-type"
                style={{ backgroundColor: type.color }}
              >
                {type.name}
              </a>
            ))}
          </div>
          <h3 className="pokemon-details-weakandresist-title">Résistances et faiblesses</h3>
          <div className="pokemon-details-weakandresist-array">
            <h4 className="pokemon-details-weakandresist-name">Immunisé</h4>
            <h4 className="pokemon-details-weakandresist-name">Très résistant</h4>
            <h4 className="pokemon-details-weakandresist-name">Résistant</h4>
            <h4 className="pokemon-details-weakandresist-name">Vulnérable</h4>
            <h4 className="pokemon-details-weakandresist-name">Très vulnérable</h4>
          </div>
          <h3 className="pokemon-details-weakandresist-title">Evolutions</h3>
        </div>
      </div>
    </div>
  );
}

PokemonDetailsPage.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      hp: PropTypes.number.isRequired,
      attack: PropTypes.number.isRequired,
      defense: PropTypes.number.isRequired,
      spe_attack: PropTypes.number.isRequired,
      spe_defense: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
    }).isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }).isRequired,
    ),
    image: PropTypes.string.isRequired,
  }),
};

PokemonDetailsPage.defaultProps = {
  pokemon: null,
};

export default PokemonDetailsPage;
