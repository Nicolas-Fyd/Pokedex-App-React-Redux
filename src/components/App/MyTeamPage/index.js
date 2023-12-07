import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MyTeam from './MyTeam';
import './styles.scss';
import { fetchMyTeam } from '../../../actions/myTeam';

function MyTeamPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyTeam());
  }, []);

  return (
    <div className="my-team-page">
      <h1 className="my-team-page-title">Mon équipe</h1>
      <MyTeam />
    </div>
  );
}

export default MyTeamPage;
