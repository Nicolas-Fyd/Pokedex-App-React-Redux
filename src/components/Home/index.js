import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../Content';
import './styles.scss';
import { fetchPokemons } from '../../actions/pokemon';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const pokemons = useSelector((state) => state.pokedex.pokemons);

  return (
    <div className="home">
      <h1 className="home-title">Liste des Pokémons</h1>
      <Content pokemons={pokemons} />
    </div>

  );
}

export default Home;
