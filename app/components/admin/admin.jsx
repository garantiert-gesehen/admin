import PropTypes from 'prop-types';
import React from 'react';

import Header from '../header/headerContainer';

import './admin.scss';

const Admin = (props) => (
  <div className="admin">
    <Header />
    {props.children}
  </div>
);

Admin.propTypes = {
  children: PropTypes.node
};

export default Admin;
