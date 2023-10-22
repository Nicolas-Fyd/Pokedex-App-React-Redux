import { createRoot } from 'react-dom/client';

import App from 'src/components/App';
import { Provider } from 'react-redux';
import store from './store';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
