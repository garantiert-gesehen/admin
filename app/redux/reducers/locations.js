import * as constants from '../constants/locations';
import { LOCATION_STRUCTURE_FIELD_TYPES } from '../../../server/config/constants';

const initialState = {
  activeField: {},
  locations: [],
  structureFields: [],
  loading: false,
  creating: false,
  deleting: false,
  updatingFields: [],
  error: ''
};

function filterUpdatingFields(updatingFields, fieldId, locationId) {
  return updatingFields.filter(field => field.fieldId !== fieldId || field.locationId !== locationId);
}

export default (state = initialState, action) => {
  switch (action.type) {

    case constants.GET_LOCATIONS:
      return { ...state, loading: true, error: '' };
    case constants.GET_LOCATIONS_FAIL:
      return { ...state, loading: false, error: action.error };
    case constants.GET_LOCATIONS_SUCCESS:
      return { ...state, loading: false, locations: action.locations, structureFields: action.structureFields };

    case constants.ACTIVATE_LOCATION_FIELD:
      return { ...state, activeField: { fieldId: action.fieldId, locationId: action.locationId } };

    case constants.UPDATE_LOCATION_FIELD: {
      const updatingFields = [...state.updatingFields, { fieldId: action.fieldId, locationId: action.locationId }];
      return { ...state, updatingFields, error: '' };
    }
    case constants.UPDATE_LOCATION_FIELD_FAIL: {
      const updatingFields = filterUpdatingFields(state.updatingFields, action.fieldId, action.locationId);
      return { ...state, updatingFields, error: action.error };
    }
    case constants.UPDATE_LOCATION_FIELD_SUCCESS: {
      const updatingFields = filterUpdatingFields(state.updatingFields, action.fieldId, action.location._id);
      const indexOfLocation = state.locations.findIndex(location => location._id === action.location._id);
      const newLocations = [...state.locations];
      newLocations[indexOfLocation] = action.location;

      return { ...state, updatingFields, locations: newLocations };
    }

    case constants.CREATE_LOCATION:
      return { ...state, creating: true, error: '' };
    case constants.CREATE_LOCATION_FAIL:
      return { ...state, creating: false, error: action.error };
    case constants.CREATE_LOCATION_SUCCESS:
      return { ...state, creating: false, locations: [action.location, ...state.locations] };


    case constants.DELETE_LOCATION:
      return { ...state, deleting: true, error: '' };
    case constants.DELETE_LOCATION_FAIL:
      return { ...state, deleting: false, error: action.error };
    case constants.DELETE_LOCATION_SUCCESS:
      return {
        ...state,
        deleting: false,
        locations: state.locations.filter(location => location._id !== action.locationId)
      };

    default:
      return state;
  }
};
