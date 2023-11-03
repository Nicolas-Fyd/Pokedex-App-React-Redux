import Header from '../Header';
import ErrorMessage from './ErrorMessage';
import './styles.scss';

function Error() {
  return (
    <div className="error-page">
      <Header />
      <ErrorMessage />
    </div>
  );
}

export default Error;
