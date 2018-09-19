import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const propTypes = {
    icon: PropTypes.string,
};

const defaultProps = {
    icon: null,
};

class Button extends React.Component {
    getElementProps() {
        const props = Object.assign({ className: '' }, this.props);
        props.className += ' button';
        delete props.children;
        delete props.icon;
        return props;
    }

    renderIcon(icon) {
        if (!icon) return null;
        return <i className='icon material-icons'>{icon}</i>;
    }

    render() {
        return (
            <button {...this.getElementProps()}>
                {this.renderIcon(this.props.icon)}
                {this.props.children}
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
