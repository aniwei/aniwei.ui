import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Settings extends React.Component {
  render () {
    return (
      <div className="app__setting"></div>
    );
  }
}

export default withRouter(connect()(Settings));