import React from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './less/index.less';

import Tab from '../tab';
import Toolbar from '../toolbar';

import actions from '../../actions';

const TabPane = Tab.TabPane;

class Scene extends React.Component {
  onToolSelect = (key, tool) => {
    const { onToolSelect } = this.props;

    tool.active = !tool.active;

    onToolSelect(tool);
  }

  onTabClose = (key) => {
    const { onToolSelect, tools } = this.props;
    let tool;

    tools.some((t) => {
      if (t.key === key) {
        return tool = t;
      }
    });

    tool.active =! tool.active;

    onToolSelect(tool);
  }

  tabsRender () {
    const { tools } = this.props;
    const tabElements = tools.filter(tool => tool.active).map(tool => <TabPane fixed={tool.fixed} tab={tool.text} key={tool.key} />);

    return (
      <Tab onClose={this.onTabClose}>
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
            <div className="app__scene-logo-text">aniwei.proxy</div>
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
  return {
    tools: state.tools
  };
}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    onToolSelect: actions.toolActive
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Scene);