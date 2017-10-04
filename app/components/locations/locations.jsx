import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from '../button/button.jsx';
import Progress from '../progress/progress.jsx';

import Row from './__row/locations__row.jsx';
import Head from './__head/locations__head.jsx';

import './locations.scss';

class Locations extends Component {
  componentDidMount() {
    this.props.init();
    document.addEventListener('click', this.onClickHandler, true);
  };

  onClickHandler = () => {
    if (this.props.activeField) {
      this.props.activateField({});
    }
  };

  render() {
    const {
      locations, loading, creating, deleting, structureFields, updatingFields,
      updateLocationField, deleteLocation, createLocation, activateField, activeField
    } = this.props;

    return (
      <div className="locations">
        {(loading || creating || deleting) && <Progress />}
        <h1>Locations</h1>
        <div>
          <Button className="locations__add" onClick={createLocation}>Add location</Button>
        </div>
          {structureFields.length > 0 && (
            <table className="locations__table">
              <Head structureFields={structureFields} />
              <tbody>
              {locations.map((location, index) => (
                <Row
                  activeField={activeField}
                  activateField={activateField}
                  structureFields={structureFields}
                  updatingFields={updatingFields}
                  location={location}
                  key={location._id}
                  updateLocationField={updateLocationField}
                  deleteLocation={deleteLocation}
                />
              ))}
              </tbody>
            </table>
          )}
      </div>
    );
  }
}
Locations.defaultProps = {
  locations: [],
  structureFields: []
};

Locations.propTypes = {
  locations: PropTypes.array,
  structureFields: PropTypes.array,
  loading: PropTypes.bool,
  creating: PropTypes.bool,
  deleting: PropTypes.bool,
  error: PropTypes.string,
  updatingFields: PropTypes.array,
  init: PropTypes.func,
  activateField: PropTypes.func,
  createLocation: PropTypes.func,
  updateLocationField: PropTypes.func,
  deleteLocation: PropTypes.func

};

export default Locations;
