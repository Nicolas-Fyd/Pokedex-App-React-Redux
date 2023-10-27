import './styles.scss';

function PokemonFilterByName({ filter, changeField }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Filtrer les données"
        value={filter}
        onChange={(event) => {
          event.preventDefault();
          changeField(event.target.value);
        }}
      />
    </div>
  );
}

export default PokemonFilterByName;
