import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';
import cloneDeep from 'lodash/cloneDeep';
import set from 'lodash/set';

import Checkbox from '../../checkbox/checkbox.jsx';
import Input from '../../input/input.jsx';
import Dropdown from '../../dropdown/dropdown.jsx';
import { LOCATION_STRUCTURE_FIELD_TYPES } from '../../../../server/config/constants';
const TYPES = LOCATION_STRUCTURE_FIELD_TYPES.map(type => ({ label: type, value: type }));

import './location-structure__field.scss';

class Field extends Component {
  updateName = (value) => {
    this.props.onChange(this.props.index, { ...this.props.field, name: value });
  };

  updateType = (value) => {
    this.props.onChange(this.props.index, { ...this.props.field, type: value });
  };

  updatePermissions = (mode, role, value) => {
    const field = cloneDeep(this.props.field);
    set(field, ['permissions', mode, role], value);

    this.props.onChange(this.props.index, field);
  };

  remove = () => {
    this.props.onRemove(this.props.index);
  };

  render() {
    const { field } = this.props;
    const { permissions = {} } = field;
    const { read = {}, update = {} } = permissions;

    return (
      <tr className="location-structure__field">
        <td>
          <Input
            hint="Name"
            className="location-structure__input"
            value={field.name || ''}
            onChange={this.updateName}
          />
        </td>
        <td>
          <Dropdown
            auto
            source={TYPES}
            className="location-structure__dropdown"
            value={field.type}
            onChange={this.updateType}
          />
        </td>
        <td>
          <div className="location-structure__permissions">
            <FontIcon value="remove_red_eye" className="location-structure__permissions-icon" />
            <FontIcon value="mode_edit"  className="location-structure__permissions-icon" />
          </div>
        </td>
        <td>
          <Checkbox
            className="location-structure__permissions-checkbox"
            checked={read.scout}
            onChange={(value) => this.updatePermissions('read', 'scout', value)}
          />
          <Checkbox
            className="location-structure__permissions-checkbox"
            checked={update.scout}
            onChange={(value) => this.updatePermissions('update', 'scout', value)}
          />
        </td>
        <td>
          <Checkbox
            className="location-structure__permissions-checkbox"
            checked={read.manager}
            onChange={(value) => this.updatePermissions('read', 'manager', value)}
          />
          <Checkbox
            className="location-structure__permissions-checkbox"
            checked={update.manager}
            onChange={(value) => this.updatePermissions('update', 'manager', value)}
          />
        </td>
        <td>
          <Checkbox
            className="location-structure__permissions-checkbox"
            checked={read.owner}
            onChange={(value) => this.updatePermissions('read', 'owner', value)}
          />
          <Checkbox
            className="location-structure__permissions-checkbox"
            checked={update.owner}
            onChange={(value) => this.updatePermissions('update', 'owner', value)}
          />
        </td>
        <td>
          <FontIcon className="location-structure__remove" value="close" onClick={this.remove} />
        </td>
      </tr>
    );
  }
}

Field.defaultProps = {
  field: {}
};

Field.propTypes = {
  field: PropTypes.object,
  update: PropTypes.node
};

export default Field;
