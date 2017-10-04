import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Checkbox as ToolboxCheckbox } from 'react-toolbox/lib/checkbox';

import extendTheme from '../../utils/extendTheme';
import './checkbox.scss';

const Checkbox = (props) => {
  const theme = {
    check: 'checkbox__check',
    ripple: 'checkbox__ripple',
    text: 'checkbox__text',
    checked: 'checkbox_checked'
  };

  return (
    <ToolboxCheckbox
      {...props}
      className={classNames('checkbox', props.className)}
      theme={extendTheme(theme, props.theme)}
    />
  );
};

Checkbox.propTypes = {
  theme: PropTypes.object
};

export default Checkbox;
