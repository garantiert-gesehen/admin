import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './autocomplete.scss';

class Autocomplete extends Component {
  render() {
    return (
      <Select
        {...this.props}
        className={classNames(
          this.props.className,
          'autocomplete'
        )}
      />
    )
  }
}

Autocomplete.propTypes = {
  theme: PropTypes.object
};

export default Autocomplete;
