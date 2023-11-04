import './styles.scss';

function Pokemon({ ...pokemon }) {
  return (
    <div className="pokemon">
      <a href={pokemon.name}>
        <img className="pokemon-img" src={pokemon.image} alt={pokemon.name} />
      </a>
      <div className="pokemon-name">#{pokemon.id } {pokemon.name}</div>
      <div className="pokemon-types">
        {pokemon.types.map((type) => (
          <a
            key={type.color}
            className="pokemon-type"
            style={{ backgroundColor: type.color }}
          >
            {type.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
