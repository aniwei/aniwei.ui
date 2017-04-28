import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

export default class Menu extends React.Component {

  menusRender () {
    const { list } = this.props;

    const listElement = list.map(menu => {
      const fillStyle = (menu.selected || menu.fixed ) ? 'fill' : 'line';

      const classes = classnames({
        [`iconfont`]: true,
        [`app__navigator-menu-item-icon`]: true,
        [`icon-${menu.key}-line`]: true
      });  

      return (
        <li className="app__navigator-menu-item" key={menu.key}>
          <NavLink className="app__navigator-menu-item-link" to={menu.key} activeClassName={`icon-${menu.key}-line`}>
            <i className={classes}></i>
          </NavLink>
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