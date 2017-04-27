import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteTransition } from 'react-router-transition';

// 公共样式
import '../../components/common';
import './less/index.less';

import Navigator from '../../components/navigator';
import List from '../../components/list';
import Extensions from '../../components/extensions';

import actions from '../../actions';

const list = [
  {
    subject: 'http://www.aniwei.tech',
    list: [
      {
        url: 'http://www.aniwei.tech/test',
        code: 200,
        method: 'GET',
        path: '/test',
        ip: '127.0.0.1'
      }, {
        url: 'http://www.aniwei.tech/test',
        code: 200,
        method: 'GET',
        path: '/test',
        ip: '127.0.0.1'
      }
    ]
  }, {
    subject: 'http://www.aniwei.tech',
    list: [
      {
        url: 'http://www.aniwei.tech/test',
        code: 200,
        method: 'GET',
        path: '/test',
        ip: '127.0.0.1'
      }
    ]
  }
];

class App extends React.Component {
  render () {
    const { props } = this;

    console.log(props)

    return (
      <div className="app">
        <Navigator 
          className="app__navigator"
          menus={props.menus}
        />
        <div className="app__scene">
          <RouteTransition
            pathname={props.location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
          >
            {props.children}
          </RouteTransition>
        </div>
      </div>
    );
  }
}

export default connect((state, ownProps) => {
  const { menus } = state;

  return {
    menus
  };
}, (dispatch) => {
  return bindActionCreators({
    onSelect: actions.tabPush,
    onClose: actions.tabClose
  }, dispatch);
})(withRouter(App));