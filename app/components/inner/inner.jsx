import PropTypes from 'prop-types';
import React from 'react';

const Inner = (props) => (
  <div className="inner">
    {props.children}
  </div>
);

Inner.propTypes = {
  children: PropTypes.node
};

export default Inner;
