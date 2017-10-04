import React, { Component } from 'react';

import Widget from '../../widget/widget.jsx';
import Progress from '../../progress/progress.jsx';

import './locations__field.scss';

class Field extends Component {
  update = (value) => {
    this.props.update(this.props._id, value);
  };

  onClick = (e) => {
    e.stopPropagation();

    if (!this.props.active) {
      this.props.activateField(e);
    }
  };

  render() {
    const { value, type, name, updating, active } = this.props;

    return (
      <td className="locations__field" onClick={this.onClick}>
        <Widget active={active} type={type} value={value} title={name} update={this.update} updating={updating} />
        {updating && <Progress className="locations__progress" />}
      </td>
    );
  }
}

Field.defaultProps = {
  value: ''
};

export default Field;
