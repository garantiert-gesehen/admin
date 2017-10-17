import { connect } from 'react-redux';
import { init } from '../../redux/actions/lists';

import LocationStructure from './lists.jsx';

const mapStateToProps = ({ lists }) => ({
  lists: lists.lists
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(init())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationStructure);
