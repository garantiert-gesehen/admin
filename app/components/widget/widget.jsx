import PropTypes from 'prop-types';
import React, { Component } from 'react';

import WidgetDate from './_date/widget_date.jsx';
import WidgetText from './_text/widget_text.jsx';
import WidgetSelection from './_selection/widget_selection.jsx';

import './widget.scss';

function getComponent(type) {
  switch (type) {
    case 'date':
      return WidgetDate;
    case 'text':
    case 'number':
      return WidgetText;
    case 'single-selection':
    case 'multi-selection':
      return WidgetSelection;
    default:
      return WidgetText;
  }
}

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
