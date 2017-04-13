import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, hashHistory, IndexRoute, withRouter } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';

import App from './container/app';
import reducers from './reducers';

const Routing = (props) => {
  const { tools, tabs } = props;
  const routes = tools.map((group, index) => {
    const listRoutes = group.list.map(
      li => <Route 
        path={li.key} 
        key={`tool:${li.key}`} 
        component={li.component} 
      />
    );

    return (
      <Route path={group.key} key={`group:${group.key}`}>
        {listRoutes}
      </Route>
    );
  });

  const store = createStore(reducers, {
    tools,
    tabs
  });
  const history = syncHistoryWithStore(hashHistory, store);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          {routes}
        </Route>
      </Router>
    </Provider>
  );
};

export default Routing;

