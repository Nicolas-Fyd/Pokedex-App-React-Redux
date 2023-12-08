import { Link } from 'react-router-dom';
import plus from 'src/assets/plus.png';
import PropTypes from 'prop-types';
import './styles.scss';

function MyTeam({ myPokemons }) {
  console.log(myPokemons);

  return (
    <div className="my-team">
      {Array.from({ length: 6 }, (_, index) => {
        const pokemon = myPokemons[index];
        return (
          <div key={index} className="my-team-member">
            <Link to={pokemon ? `/${pokemon.name}` : '/'}>
              <img
                className="my-team-member-img"
                src={pokemon ? pokemon.image : plus}
                alt={pokemon ? pokemon.name : 'plus'}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

MyTeam.propTypes = {
  myPokemons: PropTypes.arrayOf(
    PropTypes.shape({
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
      }),
      types: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
        }),
      ).isRequired,
      image: PropTypes.string.isRequired,
    }),
  ),
};

MyTeam.defaultProps = {
  myPokemons: null,
};

export default MyTeam;
