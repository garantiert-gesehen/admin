import { connect } from 'react-redux';
import {
  updateLocationStructure, changeField, addField, removeField, init
} from '../../redux/actions/locationStructure';

import LocationStructure from './location-structure.jsx';

const mapStateToProps = ({ locationStructure }) => ({
  fields: locationStructure.fields,
  error: locationStructure.error,
  loading: locationStructure.loading,
  saving: locationStructure.saving,
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(init()),
  update: () => dispatch(updateLocationStructure()),
  changeField: (index, field) => dispatch(changeField(index, field)),
  addField: () => dispatch(addField()),
  removeField: (index) => dispatch(removeField(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationStructure);
