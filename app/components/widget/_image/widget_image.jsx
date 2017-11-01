import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FontIcon from 'react-toolbox/lib/font_icon';

import Link from '../../link/link.jsx';
import UploadInput from '../../upload-input/upload-input';

import './widget_image.scss';

class SingleSelection extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.active && this.props.active && this.autocomplete) {
      ReactDOM.findDOMNode(this.autocomplete).querySelector('input').focus();
    }
  }

  onClickUploader = () => {
    this.uploadInput.input.click();
  };

  upload = (forms) => {
    this.props.update(forms, { upload: true });
  };

  onMouseEnter = () => {

  };

  onMouseLeave = () => {

  };


  clear = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.props.update(null);
  };

  render() {
    const { value } = this.props;

    return (
      <div className="widget widget_image" onClick={e => e.stopPropagation()}>
        <UploadInput
          ref={element => { this.uploadInput = element; }}
          onUpload={this.upload}
        />
        {value
          ? (
            <Link
              href={value}
              target="_blank"
              className="widget__image-icon-link"
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              title={value}
            >
              <FontIcon className="widget__image-icon widget__image-icon_picture" value="photo" />
            </Link>
          )
          : <FontIcon className="widget__image-icon" value="file_upload" onClick={this.onClickUploader} />
        }
        {value && <FontIcon className="widget__control-icon" value="close" onClick={this.clear} />}
      </div>
    );
  }
}

SingleSelection.defaultProps = {
  value: ''
};

export default SingleSelection;
