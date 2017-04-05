import React, { PropTypes } from 'react';

import './less/index.less';

import Tool from './tool';

class Toolbar extends React.Component {
  static propTypes = {
    onSelect: PropTypes.func,
    tools: PropTypes.array
  };

  static defaultProps = {
    onSelect: () => {}
  };

  toolsRender () {
    const { tools, onSelect } = this.props;
    const toolsElement = tools.map((tool, index) => {
      return (
        <li className="app__toolbar-item" key={`${tool.key}-${index}`} title={tool.text}>
          <Tool selected={tool.active} type={tool.key} fixed={tool.fixed} onSelect={(e) => onSelect(tool.key, tool, e)} />
        </li>
      );
    });

    return (
      <ul className="app__toolbar-listview clearfix">
        {toolsElement}
      </ul>
    );
  }

  render () {
    return (
      <div className="app__toolbar">
        {this.toolsRender()}
      </div>
    );
  }
}

export default Toolbar;