import PropTypes from 'prop-types';
import PokemonDetailsGauge from './PokemonDetailsGauge';
import './styles.scss';

function PokemonDetailsPage({ pokemon }) {
  const mergedWeaknessAndResist = [];

  pokemon.weakness_and_resist.forEach((entry) => {
    const typeId = entry.typecoverage_id;

    if (!mergedWeaknessAndResist[typeId]) {
      mergedWeaknessAndResist[typeId] = {
        typecoverage_id: typeId,
        name_typecoverage: entry.name_typecoverage,
        color_typecoverage: entry.color_typecoverage,
        multiplier: entry.multiplier,
      };
    } else {
      mergedWeaknessAndResist[typeId].multiplier *= entry.multiplier;
    }
  });

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
            <div className="pokemon-details-weakandresist-column">
              <h4 className="pokemon-details-weakandresist-name">Immunité</h4>
              <div className="pokemon-details-weakandresist-types">
                {mergedWeaknessAndResist
                  .filter((entry) => entry.multiplier === 0)
                  .map((entry) => (
                    <a
                      key={entry.typecoverage_id}
                      className="pokemon-details-weakandresist-type"
                      style={{ backgroundColor: entry.color_typecoverage }}
                    >
                      {entry.name_typecoverage}
                    </a>
                  ))}
              </div>
            </div>
            <div className="pokemon-details-weakandresist-column">
              <h4 className="pokemon-details-weakandresist-name">Très résistant</h4>
              <div className="pokemon-details-weakandresist-types">
                {mergedWeaknessAndResist
                  .filter((entry) => entry.multiplier === 0.25)
                  .map((entry) => (
                    <a
                      key={entry.typecoverage_id}
                      className="pokemon-details-weakandresist-type"
                      style={{ backgroundColor: entry.color_typecoverage }}
                    >
                      {entry.name_typecoverage}
                    </a>
                  ))}
              </div>
            </div>
            <div className="pokemon-details-weakandresist-column">
              <h4 className="pokemon-details-weakandresist-name">Résistant</h4>
              <div className="pokemon-details-weakandresist-types">
                {mergedWeaknessAndResist
                  .filter((entry) => entry.multiplier === 0.5)
                  .map((entry) => (
                    <a
                      key={entry.typecoverage_id}
                      className="pokemon-details-weakandresist-type"
                      style={{ backgroundColor: entry.color_typecoverage }}
                    >
                      {entry.name_typecoverage}
                    </a>
                  ))}
              </div>
            </div>
            <div className="pokemon-details-weakandresist-column">
              <h4 className="pokemon-details-weakandresist-name">Vulnérable</h4>
              <div className="pokemon-details-weakandresist-types">
                {mergedWeaknessAndResist
                  .filter((entry) => entry.multiplier === 2)
                  .map((entry) => (
                    <a
                      key={entry.typecoverage_id}
                      className="pokemon-details-weakandresist-type"
                      style={{ backgroundColor: entry.color_typecoverage }}
                    >
                      {entry.name_typecoverage}
                    </a>
                  ))}
              </div>
            </div>
            <div className="pokemon-details-weakandresist-column">
              <h4 className="pokemon-details-weakandresist-name">Très vulnérable</h4>
              <div className="pokemon-details-weakandresist-types">
                {mergedWeaknessAndResist
                  .filter((entry) => entry.multiplier === 4)
                  .map((entry) => (
                    <a
                      key={entry.typecoverage_id}
                      className="pokemon-details-weakandresist-type"
                      style={{ backgroundColor: entry.color_typecoverage }}
                    >
                      {entry.name_typecoverage}
                    </a>
                  ))}
              </div>
            </div>
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
    evolution: PropTypes.arrayOf(
      PropTypes.shape({
        state: PropTypes.string.isRequired,
        evolutionId: PropTypes.string.isRequired,
        condition: PropTypes.string.isRequired,
      }).isRequired,
    ),
    image: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    weakness_and_resist: PropTypes.arrayOf(
      PropTypes.shape({
        typecoverage_id: PropTypes.number.isRequired,
        name_typecoverage: PropTypes.string.isRequired,
        color_typecoverage: PropTypes.string.isRequired,
        multiplier: PropTypes.number.isRequired,
      }).isRequired,
    ),
  }),
};

PokemonDetailsPage.defaultProps = {
  pokemon: null,
};

export default PokemonDetailsPage;
