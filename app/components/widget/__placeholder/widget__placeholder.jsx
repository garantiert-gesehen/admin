import React from 'react';

import './widget__placeholder.scss';

const WidgetPlaceholder = ({ value, hint, ...props }) => (
  <div className="widget__placeholder" {...props}>
    {value || <span className="widget__placeholder-hint">{hint}</span>}
  </div>
);

export default WidgetPlaceholder;
