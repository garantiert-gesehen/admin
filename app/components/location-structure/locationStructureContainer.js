import { connect } from 'react-redux';
import {
  updateLocationStructure, changeField, addField, removeField, init as initStructure
} from '../../redux/actions/locationStructure';
import { init as initLists } from '../../redux/actions/lists';

import LocationStructure from './location-structure.jsx';

const mapStateToProps = ({ locationStructure, lists }) => ({
  fields: locationStructure.fields,
  error: locationStructure.error,
  loading: locationStructure.loading || lists.loading,
  saving: locationStructure.saving,
  lists: lists.lists
});

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(initStructure());
    dispatch(initLists());
  },
  update: () => dispatch(updateLocationStructure()),
  changeField: (index, field) => dispatch(changeField(index, field)),
  addField: () => dispatch(addField()),
  removeField: (index) => dispatch(removeField(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationStructure);
