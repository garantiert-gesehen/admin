import PropTypes from 'prop-types';
import React from 'react';

import './dashboard.scss';

const Dashboard = (props) => (
  <div className="dashboard">
    <span>Welcome to dashboard</span>
  </div>
);

Dashboard.propTypes = {
  children: PropTypes.node
};

export default Dashboard;
