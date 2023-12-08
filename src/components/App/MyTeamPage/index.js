import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyTeam from './MyTeam';
import './styles.scss';
import { fetchMyTeam } from '../../../actions/myTeam';

function MyTeamPage() {
  const dispatch = useDispatch();
  const myPokemons = useSelector((state) => state.myTeam.myPokemons);

  useEffect(() => {
    dispatch(fetchMyTeam());
  }, []);

  return (
    <div className="my-team-page">
      <h1 className="my-team-page-title">Mon équipe</h1>
      <MyTeam myPokemons={myPokemons} />
    </div>
  );
}

export default MyTeamPage;
