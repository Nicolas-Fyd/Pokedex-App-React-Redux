/* eslint-disable max-len */
import PropTypes from 'prop-types';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './styles.scss';

function PokemonDetailsGauge({ value }) {
  const [progress, setProgress] = React.useState(0);
  const value255scale = (value * 100) / 255;
  const targetProgress = value255scale; // La valeur à laquelle vous souhaitez que le progrès s'arrête

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= targetProgress) {
          clearInterval(timer); // Arrête l'intervalle une fois que le progrès atteint la valeur cible
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 50); // Intervalles plus courts pour une progression plus rapide

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="gauge-container">
      <div className="circle-background">
        <div className="circle-text">{value}</div>
      </div>
      <CircularProgress
        variant="determinate"
        value="100"
        size={150}
        thickness={7}
        className="circle-overlay"
        style={{ color: 'black', opacity: 0.5 }}
      />
      <CircularProgress
        variant="determinate"
        value={progress}
        size={150}
        thickness={7}
        className="circle-overlay"
        style={{ color: 'white' }}
      />
    </div>
  );
}

PokemonDetailsGauge.propTypes = {
  value: PropTypes.number.isRequired,
};

export default PokemonDetailsGauge;
