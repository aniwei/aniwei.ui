import React, { Component } from 'react';
import classnames from 'classnames';

class TabContent extends Component {
  render () {
    const { actived, children } = this.props;

    const classes = classnames({
      ['app__tabs-content']: true,
      ['app__tabs-content_active']: actived
    });

    return (
      <div className={classes}>
        {children}
      </div>  
    );
  }
}

export default TabContent;

