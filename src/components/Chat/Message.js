import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import defaultAvatar from '../../img/default-avatar.png';

const propTypes = {
    text: PropTypes.string.isRequired,
    senderName: PropTypes.string.isRequired,
    senderAvatar: PropTypes.string,
    fromCurrentUser: PropTypes.bool,
};

const defaultProps = {
    senderAvatar: null,
    fromCurrentUser: false,
};

class Message extends React.Component {
    render() {
        const {
            text,
            senderName,
            senderAvatar,
            fromCurrentUser,
        } = this.props;

        const className = ['message'];
        if (fromCurrentUser) className.push('current-user');

        return (
            <div className={className.join(' ')}>
                <Avatar src={senderAvatar || defaultAvatar} name={senderName} />
                <div className='message__text'>
                    {text}
                </div>
            </div>
        );
    }
}

Message.propTypes = propTypes;
Message.defaultProps = defaultProps;

export default Message;
