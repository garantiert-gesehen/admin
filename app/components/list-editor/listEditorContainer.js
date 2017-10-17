import { connect } from 'react-redux';
import {
  updateList, createList, deleteList, setList, init
} from '../../redux/actions/lists';

import listEditor from './list-editor.jsx';

const mapStateToProps = ({ lists }, ownProps) => {
  const result = {
    inited: lists.inited,
    updating: lists.updating,
    deleting: lists.deleting,
    error: lists.error
  };

  if (!lists.inited) {
    return result;
  }

  if (!ownProps.params.id) {
    return { ...result, ...lists.new };
  }

  const list = lists.lists.find(list => list._id === ownProps.params.id);

  return {
    ...result,
    id: list._id,
    name: list.name,
    items: list.items
  };
};

const mapDispatchToProps = (dispatch) => ({
  setList: (id, name, items) => dispatch(setList(id, name, items)),
  init: () => dispatch(init()),
  updateList: (id) => dispatch(updateList(id)),
  createList: () => dispatch(createList()),
  deleteList: (id) => dispatch(deleteList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(listEditor);
