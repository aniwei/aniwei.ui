import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './components/common';
import Scene from './components/scene';
import List from './components/list';
import Sidebar from './components/sidebar';

import reducers from './reducers';

const tools = [
  {key: 'message', text: '请求数据', active: false, component: List },
  {key: 'setting', text: '设置', active: false}
];

const store = createStore(reducers, { tools });

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Scene>
          {this.props.children}
        </Scene>
        <Sidebar />
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {

  return {
    tools: state.tools
  };
}

const AppRouter = connect(mapStateToProps)((props) => {
  const { tools } = props;
  const routesElement = tools.map((tool) => {
    return (
      <Route path={tool.key} component={tool.component} key={`route-${tool.key}`} />
    );
  });

  return (
    <Router>
      <Route exact path="/" component={App}>
        {routesElement}
      </Route>
    </Router>
  );
});

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);