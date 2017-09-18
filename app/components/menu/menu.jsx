import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Link from '../link/link.jsx';

import './menu.scss';

class Menu extends Component {
  render() {
    const { firstName, lastName, logout, logouting } = this.props;

    return (
      <div className="menu">
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
