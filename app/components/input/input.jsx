import PropTypes from 'prop-types';
import React from 'react';
import { Input as ToolboxInput } from 'react-toolbox/lib/input';

import extendTheme from '../../utils/extendTheme';
import './input.scss';

const Input = (props) => {
  const theme = {
    input: 'input',
    bar: 'input__bar',
    inputElement: 'input__element',
    hint: 'input__hint'
  };

  return <ToolboxInput {...props} theme={extendTheme(theme, props.theme)} />
};

Input.propTypes = {
  theme: PropTypes.object
};

export default Input;
