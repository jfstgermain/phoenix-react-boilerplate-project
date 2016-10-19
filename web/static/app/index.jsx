import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import invariant from 'invariant';

import configureStore from './config/stores';
import configureRoutes from './config/routes';

const Root = ({ routerHistory, store }) => {
  invariant(
    routerHistory,
    '<Root /> needs either a routingContext or routerHistory to render.'
  );

  return (
    <Provider store={store}>
      { configureRoutes(store, routerHistory) }
    </Provider>
  );
};

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Root routerHistory={history} store={store} />,
  document.getElementById('main_container')
);
