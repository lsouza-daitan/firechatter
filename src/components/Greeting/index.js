import React from 'react';
import Avatar from '../Avatar';
import Auth from '../../model/auth';
import './style.css';

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.user = Auth.currentUser;
    }

    render() {
        return (
            <div className='greeting'>
                <button className='greeting__user'>
                    <Avatar src={this.user.photoURL} />
                    <span>{this.user.displayName}</span>
                </button>
            </div>
        );
    }
}

export default Greeting;
