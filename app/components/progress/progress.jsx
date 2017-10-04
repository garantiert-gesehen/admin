import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import extendTheme from '../../utils/extendTheme';
import './progress.scss';

const Progress = (props) => {
  const theme = {
    value: 'progress__value'
  };

  return (
    <ProgressBar
      {...props}
      className={classNames('progress', props.className)}
      theme={extendTheme(theme, props.theme)}
      mode="indeterminate"
    />
  );
};

Progress.propTypes = {
  theme: PropTypes.object
};

export default Progress;
