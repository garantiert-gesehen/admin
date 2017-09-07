import React from 'react';
import PropTypes from 'prop-types';

import PageMeta from './__meta/page__meta.jsx';

const Page = ({ children }) => (
    <div className="page">
        <PageMeta />
        {children}
    </div>
);

Page.propTypes = {
    children: PropTypes.node
};

export default Page;
