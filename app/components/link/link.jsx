import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router';
import classNames from 'classnames';

import './link.scss';

const Link = ({ pseudo, isRouter, disabled, className, ...props }) => {
  const defaultClassName = classNames('link', { link_disabled: disabled }, className);

  if (pseudo) {
    return <span {...props} className={classNames(defaultClassName, 'link_pseudo')} />;
  }

  return isRouter
    ? <RouterLink {...props} className={defaultClassName} />
    : <a {...props} className={defaultClassName} />
};

Link.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  pseudo: PropTypes.bool,
  isRouter: PropTypes.bool
};

export default Link;
