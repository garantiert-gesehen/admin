import { call, put, select, takeEvery, all } from 'redux-saga/effects';

import * as constants from '../constants/locationStructure';
import * as actions from '../actions/locationStructure';
import * as api from '../../api';

export function* getLocationStructure() {
  try {
    const fields = yield call(api.getLocationStructure);

    yield put(actions.getLocationStructureSuccess(fields));
  } catch (error) {
    yield put(actions.getLocationStructureFali(error.message));
  }
}

export function* updateLocationStructure() {
  try {
    const { fields } = yield select(state => state.locationStructure);
    const newFields = yield call(api.updateLocationStructure, fields);

    yield put(actions.updateLocationStructureSuccess(newFields));

  } catch (error) {
    yield put(actions.updateLocationStructureFali(error.message));
  }
}

export function* init() {
  yield put(actions.getLocationStructure());

}

export default function* root() {
  yield all([
    takeEvery(constants.INIT_LOCATION_STRUCTURE, init),
    takeEvery(constants.GET_LOCATION_STRUCTURE, getLocationStructure),
    takeEvery(constants.UPDATE_LOCATION_STRUCTURE, updateLocationStructure)
  ]);
}
