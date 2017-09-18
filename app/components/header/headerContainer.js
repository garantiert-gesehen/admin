import { connect } from 'react-redux';
import { logout } from '../../redux/actions/user';
import get from 'lodash/get';

import Header from './header.jsx';

const mapStateToProps = ({ user }) => ({
  firstName: get(user, 'profile.firstName'),
  lastName: get(user, 'profile.lastName'),
  loading: user.logouting
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
