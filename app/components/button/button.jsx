import PropTypes from 'prop-types';
import React from 'react';
import { Button as ToolboxButton } from 'react-toolbox/lib/button';

import extendTheme from '../../utils/extendTheme';

import './button.scss';

const Button = (props) => {
  const theme = {
    button: 'button',
    primary: 'button_primary'
  };

  return <ToolboxButton {...props} theme={extendTheme(theme, props.theme)} />
};

Button.propTypes = {
  theme: PropTypes.object
};

export default Button;
