import React from 'react';
import PropTypes from 'prop-types';
import Firebase from 'firebase';
import Auth from '../../model/auth';
import Rebase from '../../model/rebase';

const propTypes = {
    room: PropTypes.string.isRequired,
};

class ChatInput extends React.Component {
    constructor(props) {
        super(props);

        this.sendMessage = this.sendMessage.bind(this);

        this.inputRef = React.createRef();
    }

    sendMessage(evt) {
        evt.preventDefault();

        const text = this.inputRef.current.value;
        const user = Auth.currentUser;

        if (!text.trim()) {
            return;
        }

        const data = {
            text,
            senderId: user.uid,
            senderName: user.displayName,
            senderAvatar: user.photoURL,
            timestamp: Firebase.database.ServerValue.TIMESTAMP,
        };

        Rebase.push(this.props.room, { data });

        this.inputRef.current.value = '';
    }

    render() {
        return (
            <div className='chat-input'>
                <form onSubmit={this.sendMessage}>
                    <input ref={this.inputRef} type='text' autoFocus />
                    <button><i class="icon material-icons">send</i></button>
                </form>
            </div>
        )
    }
}

ChatInput.propTypes = propTypes;

export default ChatInput;
