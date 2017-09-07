import { connect } from 'react-redux';
import { setPassword, setEmail } from '../../redux/actions/login';

import Login from './login.jsx';

const mapStateToProps = ({ login }) => ({ ...login });

const mapDispatchToProps = (dispatch) => ({
  setEmail: ({ target: { value } }) => dispatch(setEmail(value)),
  setPassword: ({ target: { value } }) => dispatch(setPassword(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
