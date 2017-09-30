import { connect } from 'react-redux';
import { logout } from '../../redux/actions/user';
import get from 'lodash/get';

import Menu from './menu.jsx';

const mapStateToProps = ({ user, routing }) => ({
  firstName: get(user, 'profile.firstName'),
  lastName: get(user, 'profile.lastName'),
  isAdmin: user.isAdmin,
  isScout: user.isScout,
  isManager: user.isManager,
  isOwner: user.isOwner,
  loading: user.logouting,
  currentPath: get(routing, 'locationBeforeTransitions.pathname')
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
