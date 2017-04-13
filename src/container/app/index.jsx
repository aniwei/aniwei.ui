import React from 'react';
import classnames from 'classnames';
import { RouteTransition, presets } from 'react-router-transition';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// 公共样式
import '../../components/common';
import './less/index.less';

import Tab from '../../components/tab';
import Toolbar from '../../components/toolbar';
import actions from '../../actions';

const TabPane = Tab.TabPane;

const Logo = () => {
  return (
    <div className="app__header-logo">
      <div className="app__header-logo-img"></div>
      <div className="app__header-logo-text">
        aniwei.studio<br />
        your professional devtool
        </div>
    </div>
  );
}

const SearchBar = () => {
  return (
    <div className="app__header-search-bar">
      <i className="iconfont icon-search app__header-search-bar-icon"></i>
      <input type="text" className="app__header-search-bar-input" placeholder="搜索" />
    </div>
  );
}

const Tabs = (props) => {
  const { tabs, children, onClose } = props;
  const tabElements = tabs.map(
    tool => <TabPane 
      fixed={tool.fixed} 
      tab={tool.text} 
      key={tool.key}
    />
  );

  if (tabElements.length > 0) {
    return (
      <Tab 
        onClose={onClose} 
      >
        {tabElements}
      </Tab>
    );  
  }

  return null;
}

const AppHeader = (props) => {
  return (
    <div className="app__header">
      <Logo />
      <SearchBar />
      <Toolbar {...props} onSelect={props.onSelect}/>
    </div>
  );
}

const AppContent = (props) => {
  const { location, children } = props;
  const childElement = (
    <div className="app__scene">
      {children}
    </div>
  );

  return (
    <div className="app__content">
      <Tabs {...props}/>
      <RouteTransition
        pathname={location.pathname}
        {...presets.fade}
      >
        {childElement}
      </RouteTransition>
    </div>
  );
}

class App extends React.Component {
  onClose = () => {

  }

  onToolSelect = (key, tool) => {
    const{ onToolSelect } = this.props;

    onToolSelect(tool);
  }

  render () {
    return (
      <div className="app">
        <AppHeader {...this.props} onSelect={this.onToolSelect} />
        <AppContent {...this.props} onClose={this.onClose}>
          {this.props.children}
        </AppContent>
      </div>
    );
  }
}

export default connect((state, ownProps) => {
  const { tools, tabs } = state;

  return {
    tools,
    tabs
  };
}, (dispatch) => {
  return bindActionCreators({
    onToolSelect: actions.tabPush
  }, dispatch);
})(withRouter(App));