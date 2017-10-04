import PropTypes from 'prop-types';
import React, { Component } from 'react';

import WidgetText from './__text/widget_text.jsx';

import './widget.scss';

function getComponent(type) {
  switch (type) {
    case 'text':
    case 'number':
      return WidgetText;
    default:
      return WidgetText;
  }
};

class Widget extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.updating || !nextProps.updating;
  }

  render() {
    const { type } = this.props;

    const WidgetComponent = getComponent(type);

    return (
      <WidgetComponent {...this.props} />
    );
  }
}

Widget.propTypes = {
  type: PropTypes.string
};

export default Widget;
