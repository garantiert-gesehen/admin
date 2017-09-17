import * as constants from '../constants/user';

export const setEmail = (email) =>
  ({ type: constants.SET_EMAIL, email });

export const setPassword = (password) =>
  ({ type: constants.SET_PASSWORD, password });

export const login = () =>
  ({ type: constants.LOGIN });

export const loginSuccess = (user) =>
  ({ type: constants.LOGIN_SUCCESS, user });

export const loginFail = (error) =>
  ({ type: constants.LOGIN_FAIL, error });

export const setUser = (user) =>
  ({ type: constants.SET_USER, user });
