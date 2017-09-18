import PropTypes from 'prop-types';
import React from 'react';

import './admin.scss';

const Admin = (props) => (
  <div className="admin">
    {props.children}
  </div>
);

Admin.propTypes = {
  children: PropTypes.node
};

export default Admin;
