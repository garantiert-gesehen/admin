import PropTypes from 'prop-types';
import React, { Component } from 'react';
import get from 'lodash/get';
import FontIcon from 'react-toolbox/lib/font_icon';

import Field from '../__field/locations__field.jsx';

import './locations__row.scss';

function getFieldValue(location, fieldId) {
  const fields = get(location, 'fields', []);
  const locationField = fields.find(field => field.ref === fieldId) || {};

  return locationField.value;
}

class Row extends Component {
  updateLocationField = (fieldId, value) => {
    this.props.updateLocationField(this.props.location._id, fieldId, value);
  };

  isFieldUpdating = (fieldId) => {
    return this.props.updatingFields
      .findIndex(field => field.fieldId === fieldId && field.locationId === this.props.location._id) > -1;
  };

  isFieldActive = (fieldId) => {
    return this.props.activeField.fieldId === fieldId && this.props.activeField.locationId === this.props.location._id;
  };

  deleteLocation = () => {
    this.props.deleteLocation(this.props.location._id);
  };

  render() {
    const { location, structureFields } = this.props;
    const creatorTitle = `${location.creator.profile.firstName} ${location.creator.profile.lastName}`;


    return (
      <tr className="locations__row">
        <td>
          <span title={creatorTitle}>
          {`${location.creator.profile.firstName[0]}${location.creator.profile.lastName[0]}`}
          </span>
        </td>
        {structureFields.map((field) => (
          <Field
            {...field}
            activateField={() => this.props.activateField(field._id, location._id)}
            active={this.isFieldActive(field._id)}
            updating={this.isFieldUpdating(field._id)}
            value={getFieldValue(location, field._id)}
            key={field._id}
            update={this.updateLocationField} />
        ))}
        <td>
          <FontIcon className="locations__row-remove" value="close" onClick={this.deleteLocation} />
        </td>
      </tr>
    );
  }
}



Row.defaultProps = {
  activeField: {},
  structureFields: [],
  location: {},
  updatingFields: []
};

export default Row;
