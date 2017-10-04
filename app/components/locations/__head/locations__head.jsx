import React, { Component } from 'react';

import './locations__head.scss';

class Head extends Component {
  render() {
    const { structureFields } = this.props;

    return (
      <thead className="locations__head">
        <tr className="locations__row">
          <th className="locations__head-cell">Created by</th>
          {structureFields.map(field => (
            <th className="locations__head-cell" key={field._id}>{field.name}</th>
          ))}
         <th className="locations__head-cell" />
        </tr>
      </thead>
    );
  }
}

Head.defaultProps = {
  structureFields: []
};

export default Head;
