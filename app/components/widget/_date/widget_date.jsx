import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import FontIcon from 'react-toolbox/lib/font_icon';

import Placeholder from '../__placeholder/widget__placeholder.jsx';
import Datepicker from '../../datepicker/datepicker.jsx';

import './widget_date.scss';

const FORMAT = 'DD.MM.YYYY';

class WidgetDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.active && this.props.active && this.datepicker) {
      console.log(ReactDOM.findDOMNode(this.datepicker).querySelector('input'));
      ReactDOM.findDOMNode(this.datepicker).querySelector('input').click();
    }
  }
  onChange = (e, date) => {
    const value = date && date.toString() || null;
    if (this.props.value !== value) {
      this.props.update(value);
    }
  };

  clear = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.props.update(null);
  };

  render() {
    const { title, active, value } = this.props;
    const date = value ? new Date(value) : null;
    const displayDate = date ? moment(date).format(FORMAT) : null;

    return (
      <div className="widget widget_date" ref={(element) => { this.datepicker = element; }}>
        <Datepicker
          mode="landscape"
          autoOk
          textFieldStyle={{ display: 'none' }}
          hintText={`Set ${title}`}
          container="inline"
          onChange={this.onChange}
          value={date}
        />
        {!active && <Placeholder hint={`Set ${title}`} value={displayDate} />}
        {!!value && <FontIcon className="widget__control-icon" value="close" onClick={this.clear} />}
      </div>
    );
  }
}

WidgetDate.defaultProps = {
};

export default WidgetDate;
