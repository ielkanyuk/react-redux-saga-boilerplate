import React from 'react';
import PropTypes from 'prop-types';

const InternalLayout = ({ children }) => (
    <div className="poss">
        <section className="main">
            <div className="section_content full_width">
                {children}
            </div>
        </section>
    </div>
);

InternalLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

export { InternalLayout };