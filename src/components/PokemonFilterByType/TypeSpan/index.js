import PropTypes from 'prop-types';
import './styles.scss';

function TypeSpan({ onClick, ...type }) {
  const { name, color } = type;

  return (
    <div>
      <a
        className="type-filter-span"
        onClick={() => {
          onClick(name, color);
        }}
        style={{ backgroundColor: type.color }}
      >
        {type.name}
      </a>
    </div>
  );
}

TypeSpan.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TypeSpan;
