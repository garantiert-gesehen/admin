import * as constants from '../constants/user';

const initialState = {
  isAuthenticated: false,
  email: '',
  password: '',
  loading: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_EMAIL:
      return { ...state, error: '', email: action.email };
    case constants.SET_PASSWORD:
      return { ...state, error: '', password: action.password };

    case constants.LOGIN:
      return { ...state, error: '', loading: true };

    case constants.LOGIN_FAIL:
      return { ...state, loading: false, error: action.error };

    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        profile: action.user.profile,
        isAuthenticated: true
      };

    case constants.SET_USER:
      return {
        ...state,
        profile: action.user.profile,
        isAuthenticated: true
      };

    default:
      return state;
  }
};
