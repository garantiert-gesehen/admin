import { call, put, select, takeEvery, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as constants from '../constants/user';
import * as actions from '../actions/user';
import * as api from '../../api';

export function* login() {
  try {
    const { email, password } = yield select(state => state.user);
    const user = yield call(api.login, { email, password });
    yield put(actions.loginSuccess(user));
    yield put(push('/dashboard'));

  } catch (error) {
    yield put(actions.loginFail(error.message));
  }
}

export default function* root() {
  yield all([
    takeEvery(constants.LOGIN, login)
  ]);
}
