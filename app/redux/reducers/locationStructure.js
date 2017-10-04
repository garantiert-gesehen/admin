import * as constants from '../constants/locationStructure';
import { LOCATION_STRUCTURE_FIELD_TYPES } from '../../../server/config/constants';

const initialState = {
  fields: [],
  loading: false,
  saving: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {

    case constants.GET_LOCATION_STRUCTURE:
      return { ...state, loading: true };
    case constants.GET_LOCATION_STRUCTURE_FAIL:
      return { ...state, loading: false, error: action.error };
    case constants.GET_LOCATION_STRUCTURE_SUCCESS:
      return { ...state, loading: false, fields: action.fields };


    case constants.UPDATE_LOCATION_STRUCTURE:
      return { ...state, saving: true };
    case constants.UPDATE_LOCATION_STRUCTURE_FAIL:
      return { ...state, saving: false, error: action.error };
    case constants.UPDATE_LOCATION_STRUCTURE_SUCCESS:
      return { ...state, saving: false, fields: action.fields };

    case constants.ADD_FIELD:
      return { ...state, fields: [
        ...state.fields,
        {
          name: '',
          type: LOCATION_STRUCTURE_FIELD_TYPES[0],
          permissions: {
            read: {
              scout: true,
              manager: true,
              owner: true
            },
            update: {
              scout: true,
              manager: true,
              owner: true
            }
          }
        }
      ]};
    case constants.CHANGE_FIELD: {
      const newFields = [ ...state.fields ];
      newFields[action.index] = action.field;
      return { ...state, fields: newFields };
    }

    case constants.REMOVE_FIELD: {
      const newFields = [...state.fields];
      newFields.splice(action.index, 1);
      return { ...state, fields: newFields };
    }

    default:
      return state;
  }
};
