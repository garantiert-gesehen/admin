
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Dropdown as ToolboxDropdown } from 'react-toolbox/lib/dropdown';

import extendTheme from '../../utils/extendTheme';
import './dropdown.scss';

const Checkbox = (props) => {
  const theme = {
    selected: 'dropdown__selected',
    value: 'dropdown__value',
    values: 'dropdown__values',
    input: 'dropdown__input',
    inputInputElement: 'dropdown__input-element'
  };

  return (
    <ToolboxDropdown
      {...props}
      className={classNames('dropdown', props.className)}
      theme={extendTheme(theme, props.theme)}
    />
  );
};

Checkbox.propTypes = {
  theme: PropTypes.object
};

export default Checkbox;
