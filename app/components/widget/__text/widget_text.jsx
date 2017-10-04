import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import Input from '../../input/input.jsx';
import Placeholder from '../__placeholder/widget__placeholder.jsx';

import './widget_text.scss';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.active && this.props.active && this.input) {
      this.input.toolboxInput.getWrappedInstance().focus();
    }
  }

  onBlur = () => {
    if (this.props.value !== this.state.value) {
      this.props.update(this.state.value);
    }
  };

  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { title, active } = this.props;

    return (
      <div>
        <Input
          ref={element => { this.input = element; }}
          className={classNames('widget_text', { 'widget_hidden': !active })}
          hint={`Enter ${title}`}
          onBlur={this.onBlur}
          onChange={this.onChange}
          value={this.state.value} />
        {!active && <Placeholder hint={`Enter ${title}`} value={this.state.value} />}
      </div>
    );
  }
}

Text.defaultProps = {
  value: ''
};

export default Text;
