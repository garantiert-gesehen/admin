import { connect } from 'react-redux';
import { setPassword, setEmail, login } from '../../redux/actions/user';

import Login from './login.jsx';

const mapStateToProps = ({ user }) => ({
  email: user.email,
  password: user.password,
  loading: user.loading,
  error: user.error
});

const mapDispatchToProps = (dispatch) => ({
  setEmail: ({ target: { value } }) => dispatch(setEmail(value)),
  setPassword: ({ target: { value } }) => dispatch(setPassword(value)),
  login: () => dispatch(login())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
