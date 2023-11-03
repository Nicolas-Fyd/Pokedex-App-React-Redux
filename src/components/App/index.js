import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Home from './Home';
import Error from './Error';
import './styles.scss';
import PokemonDetailsPage from './PokemonDetailsPage';
import { fetchPokemons, fetchTypes } from '../../actions/pokemon';
import Loading from './Loading';

function App() {
  const dispatch = useDispatch();
  const isPokemonsLoaded = useSelector((state) => state.pokedex.isPokemonsLoaded);
  const isTypesLoaded = useSelector((state) => state.pokedex.isTypesLoaded);

  useEffect(() => {
    dispatch(fetchPokemons());
    dispatch(fetchTypes());
  }, []);

  if (!isPokemonsLoaded || !isTypesLoaded) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<PokemonDetailsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
