import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import Auth from '../../model/auth';
import Rebase from '../../model/rebase';

const propTypes = {
    room: PropTypes.string.isRequired,
};

class MessageList extends React.Component {
    constructor(props) {
        super(props);

        this.currentUserId = Auth.currentUser.uid;
        this.state = {
            isLoading: true,
            messages: [],
        };

        this.renderMessage = this.renderMessage.bind(this);
        
        this.listenToModel();
    }
    
    listenToModel() {
        Rebase.bindToState(this.props.room, {
            context: this,
            state: 'messages',
            asArray: true,
            queries: {
                orderByChild: 'timestamp',
                limitToLast: 50,
            },
            then: () => this.setState({ isLoading: false }),
        });
    }
    
    renderMessage(message) {
        const fromCurrentUser = (message.senderId === this.currentUserId);
        return (
            <Message
                text={message.text}
                senderName={message.senderName}
                senderAvatar={message.senderAvatar}
                fromCurrentUser={fromCurrentUser}
            />
        );
    }

    render() {
        return (
            <div className="message-list">
                {this.state.messages.reverse().map(this.renderMessage)}
            </div>
        );
    }
}

MessageList.propTypes = propTypes;

export default MessageList;
