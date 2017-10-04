import * as constants from '../constants/locationStructure';


export const init = (index) =>
  ({ type: constants.INIT_LOCATION_STRUCTURE });

export const getLocationStructure = () =>
  ({ type: constants.GET_LOCATION_STRUCTURE });

export const getLocationStructureSuccess = (fields) =>
  ({ type: constants.GET_LOCATION_STRUCTURE_SUCCESS, fields });

export const getLocationStructureFali = (error) =>
  ({ type: constants.GET_LOCATION_STRUCTURE_FAIL, error });

export const updateLocationStructure = () =>
  ({ type: constants.UPDATE_LOCATION_STRUCTURE });

export const updateLocationStructureSuccess = (fields) =>
  ({ type: constants.UPDATE_LOCATION_STRUCTURE_SUCCESS, fields });

export const updateLocationStructureFail = (error) =>
  ({ type: constants.UPDATE_LOCATION_STRUCTURE_FAIL, error });

export const changeField = (index, field) =>
  ({ type: constants.CHANGE_FIELD, index, field });

export const addField = () =>
  ({ type: constants.ADD_FIELD });

export const removeField = (index) =>
  ({ type: constants.REMOVE_FIELD, index });
