import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore, { history } from './store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    </Provider>
  )
}

export default App;
