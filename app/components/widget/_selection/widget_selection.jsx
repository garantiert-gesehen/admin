import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import isEqual from 'lodash/isEqual';

import Placeholder from '../__placeholder/widget__placeholder.jsx';
import Autocomplete from '../../autocomplete/autocomplete.jsx';


import './widget_selection.scss';

class SingleSelection extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.active && this.props.active && this.autocomplete) {
      ReactDOM.findDOMNode(this.autocomplete).querySelector('input').focus();
    }
  }

  onMultiChange = (items = []) => {
    const newValues = items.map(item => item._id);

    if (!isEqual(newValues, this.props.value)) {
      return this.props.update(newValues);
    }
  };

  onSingleChange = (item) => {
    if (!item) {
      return this.props.update();
    }

    if (this.props.value !== item._id) {
      this.props.update(item._id);
    }
  };

  onChange = this.props.type === 'multi-selection' ? this.onMultiChange : this.onSingleChange;

  renderSinglePlaceholder = () => {
    const { title, list = {}, value } = this.props;
    const selectedItem = (list.items || []).find(item => item._id === value);


    return <Placeholder hint={`Select ${title}`} value={selectedItem && selectedItem.name} />;
  };


  renderMulitPlaceholder = () => {
    const { title, list = {}, value } = this.props;
    const selectedItems = (list.items || []).filter(item => value.includes(item._id));


    return <Placeholder hint={`Select ${title}`} value={selectedItems.map(item => item.name).join(', ')} />;
  };

  render() {
    const { title, active, list = {}, value, type } = this.props;
    const isMultiSelection = type === 'multi-selection';

    return (
      <div>
        <Autocomplete
          multi={isMultiSelection}
          openOnFocus
          ref={element => { this.autocomplete = element; }}
          className={classNames('widget', { 'widget_hidden': !active })}
          placeholder={`Select ${title}`}
          onChange={this.onChange}
          options={list.items}
          value={value}
          valueKey="_id"
          labelKey="name"
          multiple={false}
        />
        {!active && (
          isMultiSelection
            ? this.renderMulitPlaceholder()
            : this.renderSinglePlaceholder()
          )
        }
      </div>
    );
  }
}

SingleSelection.defaultProps = {
  value: ''
};

export default SingleSelection;
