import React, { Component } from 'react';
import classNames from 'classnames';

import Widget from '../../widget/widget.jsx';
import Progress from '../../progress/progress.jsx';

import './locations__field.scss';

class Field extends Component {
  update = (value, options) => {
    this.props.update(this.props._id, value, options);
  };

  onClick = (e) => {
    e.stopPropagation();

    if (!this.props.active) {
      this.props.activateField(e);
    }
  };

  render() {
    const { value, type, name, updating, active, list } = this.props;

    return (
      <td
        className={classNames('locations__field', { 'locations__field_active': active })}
        onClick={this.onClick}
      >
        <Widget
          active={active}
          type={type}
          value={value}
          title={name}
          update={this.update}
          updating={updating}
          list={list}
        />
        {updating && <Progress className="locations__progress" />}
      </td>
    );
  }
}

Field.defaultProps = {
  value: ''
};

export default Field;
