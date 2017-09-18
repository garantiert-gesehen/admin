import PropTypes from 'prop-types';
import React from 'react';

import './inner.scss';

const Inner = (props) => (
  <div className="inner">
    {props.children}
  </div>
);

Inner.propTypes = {
  children: PropTypes.node
};

export default Inner;
