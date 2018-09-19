import React from 'react';
import Firebase from 'firebase';
import Button from './Button';
import Auth from '../model/auth';

class ChatLogin extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loggingAs: null,
        };
    }

    renderMethod(type, icon, label, callback, section) {
        const selected = this.state.loggingAs === type;
        const disabled = this.state.loggingAs !== null && !selected;
        const onClick = () => {
            this.setState({ loggingAs: type });
            callback();
        };
        return (
            <div>
                <Button
                    className="full-size"
                    disabled={disabled}
                    icon={icon}
                    onClick={onClick}
                >
                    {label}
                </Button>
                {selected && section &&
                    <div className="section">{section}</div>
                }
            </div>
        )
    }

    render() {
        return (
            <div className="chat-login modal">
                <h1>Login</h1>
                {this.renderMethod("google", null, "Sign in with Google Account", () => {
                    const provider = new Firebase.auth.GoogleAuthProvider();
                    provider.addScope('profile');
                    provider.addScope('email');
                    Auth.signInWithPopup(provider);
                })}
            </div>
        );
    }
}

export default ChatLogin;
