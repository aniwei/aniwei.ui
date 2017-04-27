import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Extensions extends React.Component {
  render () {
    return (
      <div className="app__extensions">
        <div className="app__extensions-group">
          <div className="app__extensions-group-title">
            A
          </div>
          <div className="app__extensions-group-content">
            <div className="app__extensions-listview">
              <div className="app__extensions-item">

              </div>

              <div className="app__extensions-item">
                
              </div>

              <div className="app__extensions-item">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(Extensions));