import * as constants from '../constants/locations';

export const init = (index) =>
  ({ type: constants.INIT_LOCATIONS });

export const getLocations = () =>
  ({ type: constants.GET_LOCATIONS });

export const getLocationsSuccess = (locations, structureFields) =>
  ({ type: constants.GET_LOCATIONS_SUCCESS, locations, structureFields });

export const getLocationsFail = (error) =>
  ({ type: constants.GET_LOCATIONS_FAIL, error });

export const updateLocationField = (locationId, fieldId, value) =>
  ({ type: constants.UPDATE_LOCATION_FIELD, value, fieldId, locationId });

export const updateLocationFieldSuccess = (location, fieldId) =>
  ({ type: constants.UPDATE_LOCATION_FIELD_SUCCESS, location, fieldId });

export const updateLocationFieldFail = (locationId, fieldId, error) =>
  ({ type: constants.UPDATE_LOCATION_FIELD_FAIL, fieldId, locationId, error });

export const createLocation = () =>
  ({ type: constants.CREATE_LOCATION });

export const createLocationSuccess = (location) =>
  ({ type: constants.CREATE_LOCATION_SUCCESS, location });

export const createLocationFail = (error) =>
  ({ type: constants.CREATE_LOCATION_FAIL });

export const deleteLocation = (locationId) =>
  ({ type: constants.DELETE_LOCATION, locationId });

export const deleteLocationSuccess = (locationId) =>
  ({ type: constants.DELETE_LOCATION_SUCCESS, locationId });

export const deleteLocationFail = (error) =>
  ({ type: constants.DELETE_LOCATION_FAIL, error });

export const activateLocationField = (fieldId, locationId) =>
  ({ type: constants.ACTIVATE_LOCATION_FIELD, fieldId, locationId });
