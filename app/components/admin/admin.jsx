import PropTypes from 'prop-types';
import React from 'react';

import Menu from '../menu/menuContainer';

import './admin.scss';

const Admin = (props) => (
  <div className="admin">
    <Menu />
    {props.children}
  </div>
);

Admin.propTypes = {
  children: PropTypes.node
};

export default Admin;
