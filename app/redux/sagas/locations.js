import { call, put, select, takeEvery, all } from 'redux-saga/effects';

import * as constants from '../constants/locations';
import * as actions from '../actions/locations';
import * as api from '../../api';

export function* getLocations() {
  try {
    const { locations, structureFields } = yield call(api.getLocations);

    yield put(actions.getLocationsSuccess(locations, structureFields));
  } catch (error) {
    yield put(actions.getLocationsFail(error.message));
  }
}

export function* uploadFile(formData) {
  const res = yield call(api.getSignedRequest, formData);
  console.log(res);
  const { signedRequest, url } = res.data;
  yield call(api.uploadFile, formData, signedRequest);

  console.log('URL!!', url);
  return url;
}

export function* updateLocationField({ locationId, fieldId, value, options = {} }) {
  try {
    let fieldValue = value;
    console.log(value);
    if (options.upload) {
      fieldValue = yield call(uploadFile, value[0]);
    }
    const location = yield call(api.updateLocationField, { locationId, fieldId, value: fieldValue });

    yield put(actions.updateLocationFieldSuccess(location, fieldId));
  } catch (error) {
    yield put(actions.updateLocationFieldFail(locationId, fieldId, error.message));
  }
}

export function* createLocation() {
  try {
    const location = yield call(api.createLocation);

    yield put(actions.createLocationSuccess(location));
  } catch (error) {
    yield put(actions.createLocationFail(error.message));
  }
}

export function* deleteLocation({ locationId }) {
  try {
    const deletedLocationId = yield call(api.deleteLocation, locationId);

    yield put(actions.deleteLocationSuccess(deletedLocationId));
  } catch (error) {
    yield put(actions.deleteLocationFail(error.message));
  }
}

export function* init() {
  yield put(actions.getLocations());

}

export default function* root() {
  yield all([
    takeEvery(constants.INIT_LOCATIONS, init),
    takeEvery(constants.GET_LOCATIONS, getLocations),
    takeEvery(constants.UPDATE_LOCATION_FIELD, updateLocationField),
    takeEvery(constants.CREATE_LOCATION, createLocation),
    takeEvery(constants.DELETE_LOCATION, deleteLocation)
  ]);
}
