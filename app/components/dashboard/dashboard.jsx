import PropTypes from 'prop-types';
import React from 'react';

const Dashboard = (props) => (
  <div className="admin">
    {props.children}
  </div>
);

Dashboard.propTypes = {
  children: PropTypes.node
};

export default Dashboard;
