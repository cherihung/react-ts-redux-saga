import './index.css';

import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route as Router, Switch } from 'react-router';
import { Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import { AppRoutes } from './routes';
import configureStore from './store/configureStore';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          {AppRoutes.map(route => <Route key={route.path} {...route} />)}
        </Switch>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
