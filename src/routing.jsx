import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, hashHistory, withRouter } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';

import App from './container/app';
import Welcome from './container/welcome';
import reducers from './reducers';


class Routing extends React.Component {


  render () {
    const { props } = this;
    const { menus, list } = props;
    const listRoutes = menus.map(
      li => <Route 
        path={li.route || li.key} 
        key={`tool:${li.key}`} 
        component={li.component}
      />
    );

    const store = createStore(reducers, props);
    const history = syncHistoryWithStore(hashHistory, store);

    return (
      <Provider store={store}>
        <Router history={history} 
          onUpdate={() => {}}
        >
          <Route path="/" component={App}>
            {listRoutes}
            <Route path="welcome" component={Welcome} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Routing;

