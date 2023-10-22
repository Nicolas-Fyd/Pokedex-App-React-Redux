import './styles.scss';

function Pokemon() {

  const typeStyle = { backgroundColor: '#f0f' }

  return (
    <div className="pokemon">
      <img className="pokemon-img" src="https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png" alt="Bulbizarre" />
      <div className="pokemon-name">#1 Bulbizarre</div>
      <a className="pokemon-type" style={typeStyle}>Grass</a>
      <a className="pokemon-type" style={typeStyle}>Poison</a>
    </div>
  );
}

export default Pokemon;
