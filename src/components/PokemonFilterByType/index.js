import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import TypeSpan from './TypeSpan';
import './styles.scss';
import { selectTypeFilters } from '../../actions/pokemon';

function PokemonFilterByType({ types }) {
  const dispatch = useDispatch();

  return (
    <div className="type-filter">
      {types.map((type) => (
        <TypeSpan
          key={type.id}
          onClick={(newValue) => {
            dispatch(selectTypeFilters(newValue));
          }}
          {...type}
        />
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
