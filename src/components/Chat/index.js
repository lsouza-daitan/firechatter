import React from 'react';
import PropTypes from 'prop-types';
import ChatInput from './ChatInput';
import MessageList from './MessageList';
import './style.css';

const propTypes = {
    roomId: PropTypes.string.isRequired,
};

class Chat extends React.Component {
    render() {
        const {
            roomId,
        } = this.props;

        // Make chat room endpoint
        const room = `/chat-${roomId}`;

        return (
            <div className='chat' data-roomId={roomId}>
                <MessageList room={room} />
                <ChatInput room={room} />
            </div>
        );
    }
}

Chat.propTypes = propTypes;

export default Chat;
