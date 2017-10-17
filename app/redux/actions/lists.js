import * as constants from '../constants/lists';

export const init = () =>
  ({ type: constants.INIT_LISTS });

export const getLists = () =>
  ({ type: constants.GET_LISTS });

export const getListsSuccess = (lists) =>
  ({ type: constants.GET_LISTS_SUCCESS, lists });

export const getListsFail = (error) =>
  ({ type: constants.GET_LISTS_FAIL, error });

export const updateList = (listId) =>
  ({ type: constants.UPDATE_LIST, listId });

export const updateListSuccess = (list) =>
  ({ type: constants.UPDATE_LIST_SUCCESS, list });

export const updateListFail = (error) =>
  ({ type: constants.UPDATE_LIST_FAIL, error });

export const createList = () =>
  ({ type: constants.CREATE_LIST });

export const createListSuccess = (list) =>
  ({ type: constants.CREATE_LIST_SUCCESS, list });

export const createListFail = (error) =>
  ({ type: constants.CREATE_LIST_FAIL });

export const deleteList = (listId) =>
  ({ type: constants.DELETE_LIST, listId });

export const deleteListSuccess = (listId) =>
  ({ type: constants.DELETE_LIST_SUCCESS, listId });

export const deleteListFail = (error) =>
  ({ type: constants.DELETE_LIST_FAIL, error });

export const setList = (listId, name, items) =>
  ({ type: constants.SET_LIST, listId, name, items });
