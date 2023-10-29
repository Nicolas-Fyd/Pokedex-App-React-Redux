import './styles.scss';

function TypeSpan({ ...type }) {
  return (
    <div>
      <a
        className="type-filter-span"
        style={{ backgroundColor: type.color }}
      >
        {type.name}
      </a>
    </div>
  );
}

export default TypeSpan;
