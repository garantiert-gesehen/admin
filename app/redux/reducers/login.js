import { SET_EMAIL, SET_PASSWORD } from '../constants/login';

const initialState = {
  email: '',
  password: '',
  loading: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.email };
    case SET_PASSWORD:
      return { ...state, password: action.password };
    default:
      return state;
  }
};
