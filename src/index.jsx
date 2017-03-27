import React from 'react';
import { render } from 'react-dom';

import './components/common';

import Scene from './components/scene';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Scene />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);