import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Routes from './configs/routes';
import Contexts from './configs/contexts';
import configureStore, { history } from './configs/configureStore';
import ErrorBoundary from './configs/errorBoundary';

import './api/common/assets/css/animated.css';
import './api/common/assets/css/fadeTransition.css';
import './api/common/assets/css/style.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <Contexts>
        <ErrorBoundary>
          <App>
            <Routes />
          </App>
        </ErrorBoundary>
      </Contexts>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
