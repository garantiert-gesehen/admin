import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Link from '../link/link.jsx';

import './menu.scss';

class Menu extends Component {
  render() {
    const { firstName, lastName, logout, logouting, isAdmin } = this.props;

    return (
      <div className="menu">
        <div className="menu__content">
          {isAdmin && (
            <Link
              isRouter
              className="menu__item"
              activeClassName="menu__item_active"
              to="/location-structure"
            >
              Location structure
            </Link>
          )}
          <Link
            isRouter
            className="menu__item"
            activeClassName="menu__item_active"
            to="/locations"
          >
            Locations
          </Link>
        </div>
        <div className="menu__user">
          <span className="menu__name">{`${firstName} ${lastName}`}</span>
          <Link
            className="menu__logout"
            disabled={logouting}
            onClick={logout}
          >
            {logouting ? 'Logging out…' : 'Logout'}
          </Link>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  logout: PropTypes.func,
  logouting: PropTypes.bool
};

export default Menu;
