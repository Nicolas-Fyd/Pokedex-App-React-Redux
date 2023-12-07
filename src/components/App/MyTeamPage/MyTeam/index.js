import { Link } from 'react-router-dom';
import plus from 'src/assets/plus.png';
import './styles.scss';

function MyTeam() {
  return (
    <div className="my-team">
      <div className="my-team-member">
        <Link to="/">
          <img className="my-team-member-img" src="https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png" alt="nom du pokemon" />
        </Link>
      </div>
      <div className="my-team-member">
        <Link to="/">
          <img className="my-team-member-img" src={plus} alt="nom du pokemon" />
        </Link>
      </div>
      <div className="my-team-member">
        <Link to="/">
          <img className="my-team-member-img" src={plus} alt="nom du pokemon" />
        </Link>
      </div>
      <div className="my-team-member">
        <Link to="/">
          <img className="my-team-member-img" src={plus} alt="nom du pokemon" />
        </Link>
      </div>
      <div className="my-team-member">
        <Link to="/">
          <img className="my-team-member-img" src={plus} alt="nom du pokemon" />
        </Link>
      </div>
      <div className="my-team-member">
        <Link to="/">
          <img className="my-team-member-img" src={plus} alt="nom du pokemon" />
        </Link>
      </div>
    </div>
  );
}

export default MyTeam;
