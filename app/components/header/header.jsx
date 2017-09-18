import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Link from '../link/link.jsx';

import './header.scss';

class Header extends Component {
  render() {
    const { firstName, lastName, logout, logouting } = this.props;

    return (
      <header className="header">
        <div className="header__user">
          <span className="header__name">{`${firstName} ${lastName}`}</span>
          <Link
            className="header__logout"
            disabled={logouting}
            onClick={logout}
          >
            {logouting ? 'Logging out…' : 'Logout'}
          </Link>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  logout: PropTypes.func,
  logouting: PropTypes.bool
};

export default Header;
