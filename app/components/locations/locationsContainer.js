import { connect } from 'react-redux';
import {
  init, createLocation, updateLocationField, deleteLocation, activateLocationField
} from '../../redux/actions/locations';

import Locations from './locations.jsx';

const mapStateToProps = ({ locations }) => ({
  activeField: locations.activeField,
  locations: locations.locations,
  structureFields: locations.structureFields,
  loading: locations.loading,
  updatingFields: locations.updatingFields,
  creating: locations.creating,
  deleting: locations.deleting,
  error: locations.error
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(init()),
  createLocation: () => dispatch(createLocation()),
  updateLocationField: (locationId, fieldId, value) => dispatch(updateLocationField(locationId, fieldId, value)),
  activateField: (fieldId, locationId) => dispatch(activateLocationField(fieldId, locationId)),
  deleteLocation: (locationId) => dispatch(deleteLocation(locationId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
