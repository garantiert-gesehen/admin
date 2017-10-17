import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';

import Input from '../input/input.jsx';
import Progress from '../progress/progress.jsx';
import Button from '../button/button.jsx';

import './list-editor.scss';

class ListEditor extends Component {
  componentDidMount() {
    if (!this.props.inited) {
      this.props.init();
    }
  };

  setList = ({ name, items }) => {
    const { id } = this.props;

    this.props.setList(id, name, items);
  };

  changeName = (name) => {
    this.setList({ name, items: this.props.items });
  };

  changeItemName = (index, name) => {
    const newItems = [ ...this.props.items ];
    newItems[index] = { ...newItems[index], name };
    this.setList({ name: this.props.name, items: newItems });
  };

  addItem = () => {
    this.setList({ name: this.props.name, items: [...this.props.items, { name: '' }] });
  };

  submit = (e) => {
    const { id, createList, updateList } = this.props;
    e.preventDefault();

    return id ? updateList(id) : createList();
  };

  removeItem = (indexToRemove) => {
    this.setList({
      name: this.props.name,
      items: this.props.items.filter((item, index) => indexToRemove !== index)
    });
  };

  remove = () => {
    return this.props.deleteList(this.props.id);
  };

  render() {
    const { items, name, updating, deleting, id } = this.props;

    return (
      <form className="list-editor" onSubmit={this.submit}>
        {(updating || deleting) && <Progress />}
        <div className="list-editor__content">
          <h1>List editor</h1>
          <div>
            <Input hint="List name" onChange={this.changeName} value={name} />
          </div>
          <div className="list-editor__items">
            <div><h3>Items</h3></div>
            {items.map((item, index) => (
              <div key={index} className="list-editor__item">
                <Input
                  hint="Item name"
                  className="list-editor__item-input"
                  onChange={(value) => this.changeItemName(index, value)}
                  value={item.name || ''}
                />
                <FontIcon className="list-editor__remove" value="close" onClick={() => this.removeItem(index)} />
              </div>
            ))}
          </div>
          <div>
            <FontIcon className="list-editor__add" value="add" onClick={this.addItem} />
          </div>
        </div>
        <div className="list-editor__footer">
          {!!id && (
            <Button onClick={this.remove} className="list-editor__delete-button" type="button">Delete</Button>
          )}
          <Button primary type="submit">{id ? 'Save' : 'Create'}</Button>
        </div>
      </form>
    );
  }
}

ListEditor.defaultProps = {
  name: '',
  items: []
};

export default ListEditor;
