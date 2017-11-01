import React, { Component } from 'react';
import PropTypes from 'prop-types';


export function createFormData(file, fileName, fileType) {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('fileName', fileName);
  formData.append('fileType', fileType);

  return formData;
}

export function parseFileForms(files, supportedFileTypes) {
  const forms = [];

  for (let i = 0; i < files.length; i++) {
    if (supportedFileTypes && !supportedFileTypes.includes(files[i].type) && supportedFileTypes !== '*') {
      throw 'not supported file type';
    }

    forms.push(createFormData(files[i], files[i].name, files[i].type));
  }

  return forms;
}

class UploadInput extends Component {
  onChange = () => {
    const supportedFileTypes = this.props.accept;
    const files = this.input.files;

    if (!files) {
      return;
    }

    try {
      const forms = parseFileForms(files, supportedFileTypes);
      console.log(forms);
      this.props.onUpload(forms);
    } catch (error) {
      if (this.props.onError) {
        this.props.onError(error);
      }
    } finally {
      this.input.value = null; // for emitting change when we choose same file
    }
  };

  render() {
    const { multiple, accept } = this.props;

    return (
      <input
        accept={accept}
        hidden
        multiple={multiple}
        onChange={this.onChange}
        ref={element => { this.input = element }}
        type="file"
        data-qa="file-input"
      />
    );
  }
}

UploadInput.defaultProps = {
  multiple: false,
  accept: '*'
};

UploadInput.propTypes = {
  onUpload: PropTypes.func,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  onError: PropTypes.func
};

export default UploadInput;
