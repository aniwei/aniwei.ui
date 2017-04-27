import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

export default class Menu extends React.Component {

  menusRender () {
    const { list } = this.props;

    const listElement = list.map(menu => {
      const fillStyle = (menu.selected || menu.fixed ) ? 'fill' : 'line';

      const classes = classnames({
        [`iconfont`]: true,
        [`app__navigator-menu-item-icon`]: true,
        [`icon-${menu.key}-${fillStyle}`]: true
      });  

      return (
        <li className="app__navigator-menu-item" key={menu.key}>
          <Link className="app__navigator-menu-item-link" to={menu.key}>
            <i className={classes}></i>
          </Link>
        </li>
      );
    });

    return (
      <ul className="app__navigator-menu-listview">
        {listElement}
      </ul>
    );
  }

  render () {
    return (
      <div className="app__navigator-menu">
        {this.menusRender()}
      </div>
    );
  }
}