import * as constants from '../constants/login';

export const setEmail = (email) =>
  ({ type: constants.SET_EMAIL, email });

export const setPassword = (password) =>
  ({ type: constants.SET_PASSWORD, password });
