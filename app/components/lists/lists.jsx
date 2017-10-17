import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';

import Progress from '../progress/progress.jsx';
import Button from '../button/button.jsx';
import Link from '../link/link.jsx';

import './lists.scss';

class Lists extends Component {
  componentDidMount() {
    this.props.init();
  };

  render() {
    const { lists, loading } = this.props;

    return (
      <div className="lists">
        {loading && <Progress />}
        <div className="lists__content">
          <h1>Lists</h1>
          {lists.map(list => (
            <div key={list._id}>
              <Link isRouter to={`/lists/${list._id}`}>{list.name}</Link>
            </div>
          ))}
        </div>
        <div className="lists__footer">
          <Link isRouter to={`/lists/new`}><Button primary>Create new list</Button></Link>
        </div>
      </div>
    );
  }
}

Lists.defaultProps = {
  lists: []
};

export default Lists;
