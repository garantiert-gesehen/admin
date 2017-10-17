import * as constants from '../constants/lists';

const initialState = {
  inited: false,
  new: {},
  lists: [],
  loading: false,
  updating: false,
  creating: false,
  deleting: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_LISTS:
      return { ...state, loading: true, error: '' };
    case constants.GET_LISTS_FAIL:
      return { ...state, loading: false, error: action.error };
    case constants.GET_LISTS_SUCCESS:
      return { ...state, loading: false, lists: action.lists, inited: true };

    case constants.SET_LIST: {
      if (action.listId) {
        const index = state.lists.findIndex(list => list._id === action.listId);
        const newLists = [...state.lists];
        newLists[index] = { ...newLists[index], name: action.name, items: action.items, };

        return { ...state, lists: newLists };
      }

      return { ...state, new: { name: action.name, items: action.items } };

    }
    case constants.UPDATE_LIST: {
      return { ...state, updating: true, error: '' };
    }
    case constants.UPDATE_LIST_SUCCESS: {
      const index = state.lists.findIndex(list => list._id === action.list._id);
      const newLists = [...state.lists];
      newLists[index] = action.list;

      return { ...state, updating: false, lists: newLists };
    }
    case constants.UPDATE_LIST_FAIL: {
      return { ...state, updating: false, error: action.error };
    }

    case constants.CREATE_LIST:
      return { ...state, creating: true, error: '' };
    case constants.CREATE_LIST_FAIL:
      return { ...state, creating: false, error: action.error };
    case constants.CREATE_LIST_SUCCESS:
      return { ...state, creating: false, lists: [...state.lists, action.list], new: {} };


    case constants.DELETE_LIST:
      return { ...state, deleting: true, error: '' };
    case constants.DELETE_LIST_FAIL:
      return { ...state, deleting: false, error: action.error };
    case constants.DELETE_LIST_SUCCESS:
      return {
        ...state,
        deleting: false,
        locations: state.lists.filter(list => list._id !== list.listId)
      };

    default:
      return state;
  }
};
