import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    when: PropTypes.bool.isRequired,
    wrap: PropTypes.func.isRequired,
};

class Wrapper extends React.Component {
    render() {
        const { wrap, when, children } = this.props;
        return when ? wrap(children) : children;
    }
}

Wrapper.propTypes = propTypes;

export default Wrapper;
