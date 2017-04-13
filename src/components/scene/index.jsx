import React from 'react';
import classnames from 'classnames';

import './less/index.less';

import Tab from '../tab';
import Toolbar from '../toolbar';
import actions from '../../actions';

const TabPane = Tab.TabPane;

class Scene extends React.Component {
  
  tabsRender () {
    const { tabs, children, location } = this.props;
    const tabElements = tabs.map(
      tool => <TabPane fixed={tool.fixed} tab={tool.text} key={tool.key}>{children}</TabPane>
    );

    return (
      <Tab onClose={this.onTabClose} pathname={location.pathname}>
        {tabElements}
      </Tab>
    );
  }
  
  render () {
    const { tools } = this.props;
    const toolsName = tools.map(tool => tool.name);

    return (
      <div className="app__scene">
        <div className="app__scene-header">
          <div className="app__scene-logo">
            <div className="app__scene-logo-img"></div>
            <div className="app__scene-logo-text">
              aniwei.studio<br />
              your professional devtool
              </div>
          </div>
          <div className="app__scene-search-bar">
            <i className="iconfont icon-search app__scene-search-bar-icon"></i>
            <input type="text" className="app__scene-search-bar-input" placeholder="搜索" />
          </div>

          <Toolbar tools={tools} onSelect={this.onToolSelect} />
        </div>

        <div className="app__scene-content">
          {this.tabsRender()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { locationBeforeTransitions } = state.routing;
  
  return {
    tools: state.tools,
    tabs: state.tabs,
    location: locationBeforeTransitions
  };
}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    onToolSelect: actions.toolActive
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Scene);