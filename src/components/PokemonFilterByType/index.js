import PropTypes from 'prop-types';
import TypeSpan from './TypeSpan';
import './styles.scss';

function PokemonFilterByType({ types }) {
  return (
    <div className="type-filter">
      {types.map((type) => (
        <TypeSpan key={type.id} {...type} />
      ))}
    </div>
  );
}

PokemonFilterByType.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ),
};

PokemonFilterByType.defaultProps = {
  types: null,
};

export default PokemonFilterByType;
