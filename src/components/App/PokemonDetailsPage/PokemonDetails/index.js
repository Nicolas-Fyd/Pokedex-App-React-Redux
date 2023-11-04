import PropTypes from 'prop-types';
import PokemonDetailsGauge from './PokemonDetailsGauge';
import './styles.scss';

function PokemonDetailsPage({ pokemon }) {
  return (
    <div className="pokemon-details">
      <h1 className="pokemon-details-title">Détails de {pokemon.name}</h1>
      <div className="pokemon-details-div">
        <img src={pokemon.image} alt={pokemon.name} className="pokemon-details-img" />
        <div className="pokemon-details-infos">
          <h2 className="pokemon-details-infos-title">#{pokemon.id} {pokemon.name}</h2>
          <div className="pokemon-details-infos-types">
            {pokemon.types.map((type) => (
              <a
                key={type.color}
                className="pokemon-details-infos-type"
                style={{ backgroundColor: type.color }}
              >
                {type.name}
              </a>
            ))}
          </div>
          <h3 className="pokemon-details-statistics-title">Statistiques</h3>
          <div className="pokemon-details-statistics">
            {Object.keys(pokemon.stats).map((statName) => (
              <div className="pokemon-details-statistics-bloc" key={statName}>
                <span className="pokemon-details-statistic-name">{statName.charAt(0).toUpperCase() + statName.slice(1)}</span>
                <PokemonDetailsGauge value={pokemon.stats[statName]} />
              </div>
            ))}
          </div>
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
