import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, hashHistory, withRouter } from 'react-router-dom';
import { syncHistoryWithStore, push } from 'react-router-redux';

import App from './container/app';
import reducers from './reducers';


class Routing extends React.Component {

  render () {
    const { props } = this;
    const { menus, list } = props;
    const store = createStore(reducers, props);

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Routing;

