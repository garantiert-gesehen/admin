import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';

import Button from '../button/button.jsx';
import Progress from '../progress/progress.jsx';

import Field from './__field/location-structure__field.jsx';

import './location-structure.scss';

class LocationStructure extends Component {
  componentDidMount() {
    this.props.init();
  };

  submit = (e) => {
    e.preventDefault();
    this.props.update();
  };

  render() {
    const { fields, changeField, addField, removeField, loading, saving, lists } = this.props;

    return (
      <form className="location-structure" onSubmit={this.submit}>
        <div className="location-structure__content">
          {loading && <Progress />}
          <h1>Location structure</h1>
          {fields.length > 0 && (
            <table className="location-structure__fields">
              <thead>
                <tr>
                  <td colSpan="3" />
                  <td className="location-structure__header-cell">
                    <div className="location-structure__title">Scout</div>
                  </td>
                  <td className="location-structure__header-cell">
                    <div className="location-structure__title">Manager</div>
                  </td>
                  <td className="location-structure__header-cell">
                    <div className="location-structure__title">Owner</div>
                  </td>
                </tr>
              </thead>
              <tbody>
              {fields.map((field, index) => (
                <Field
                  lists={lists}
                  key={field._id || index}
                  field={field}
                  onChange={changeField}
                  onRemove={removeField}
                  index={index}
                />
              ))}
              </tbody>
          </table>
        )}
        <div>
          <FontIcon className="location-structure__add" value="add" onClick={addField} />
        </div>
        </div>
        <div className="location-structure__footer">
          <Button type="submit" primary disabled={loading || saving}>{saving ? 'Saving…' : 'Save'}</Button>
        </div>
      </form>
    );
  }
}



LocationStructure.propTypes = {
  update: PropTypes.func,
  changeField: PropTypes.func
};

export default LocationStructure;
