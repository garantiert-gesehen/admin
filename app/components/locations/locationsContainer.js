import { connect } from 'react-redux';
import {
  init as initLocations, createLocation, updateLocationField, deleteLocation, activateLocationField
} from '../../redux/actions/locations';
import { init as initLists } from '../../redux/actions/lists';

import Locations from './locations.jsx';

const mapStateToProps = ({ locations, lists }) => ({
  activeField: locations.activeField,
  locations: locations.locations,
  structureFields: locations.structureFields.map(field => field.list
    ? {
      ...field,
      list: lists.lists.find(list => list._id === field.list)
    }
    : field
  ),
  loading: locations.loading,
  updatingFields: locations.updatingFields,
  creating: locations.creating,
  deleting: locations.deleting,
  error: locations.error
});

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(initLocations());
    dispatch(initLists());
  },
  createLocation: () => dispatch(createLocation()),
  updateLocationField: (locationId, fieldId, value) => dispatch(updateLocationField(locationId, fieldId, value)),
  activateField: (fieldId, locationId) => dispatch(activateLocationField(fieldId, locationId)),
  deleteLocation: (locationId) => dispatch(deleteLocation(locationId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
