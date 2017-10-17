import { call, put, select, takeEvery, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as constants from '../constants/lists';
import * as actions from '../actions/lists';
import * as api from '../../api';

export function* getLists() {
  try {
    const fields = yield call(api.getLists);

    return yield put(actions.getListsSuccess(fields));
  } catch (error) {
    yield put(actions.getListsFail(error.message));
  }
}

export function* updateList({ listId }) {
  try {
    const { name, items } = yield select(state => {
      return state.lists.lists.find(list => list._id === listId)
    });
    const updatedList = yield call(api.updateList, listId, name, items);

    yield put(actions.updateListSuccess(updatedList));

  } catch (error) {
    yield put(actions.updateListFail(error.message));
  }
}

export function* createList() {
  try {
    const { name, items } = yield select(state => state.lists.new);
    const newList = yield call(api.createList, name, items);
    yield put(actions.createListSuccess(newList));
    yield put(push(`/lists/${newList._id}`));
  } catch (error) {
    yield put(actions.createListFail(error.message));
  }
}

export function* deleteList({ listId }) {
  try {
    yield call(api.deleteList, listId);

    yield put(actions.deleteListSuccess(listId));
    yield put(push('/lists'));

  } catch (error) {
    yield put(actions.deleteListFail(error.message));
  }
}

export function* init() {
  yield put(actions.getLists());
}

export default function* root() {
  yield all([
    takeEvery(constants.INIT_LISTS, init),
    takeEvery(constants.GET_LISTS, getLists),
    takeEvery(constants.CREATE_LIST, createList),
    takeEvery(constants.UPDATE_LIST, updateList),
    takeEvery(constants.DELETE_LIST, deleteList)
  ]);
}
