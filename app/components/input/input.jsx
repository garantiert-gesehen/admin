import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Input as ToolboxInput } from 'react-toolbox/lib/input';

import extendTheme from '../../utils/extendTheme';
import './input.scss';

class Input extends  Component {
  render() {
    const theme = {
      input: 'input',
      bar: 'input__bar',
      inputElement: 'input__element',
      hint: 'input__hint'
    };

    return (
      <ToolboxInput
        {...this.props}
        theme={extendTheme(theme, this.props.theme)}
        ref={element => { this.toolboxInput = element; }}
      />
    );
  }
};

Input.propTypes = {
  theme: PropTypes.object
};

export default Input;
