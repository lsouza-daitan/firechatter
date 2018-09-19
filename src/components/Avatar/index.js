import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string,
};

const Avatar = (props) => (
    <img src={props.src} alt={props.name} className='avatar' />
);

Avatar.propTypes = propTypes;

export default Avatar;
