import React from 'react';
import Firebase from 'firebase';
import Button from '../Button';
import Auth from '../../model/auth';

const onClick = () => {
    const provider = new Firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    Auth.signInWithPopup(provider);
};

const LoginGoogle = () => (
    <Button className='full-size' onClick={onClick}>
        Sign in with Google
    </Button>
);

export default LoginGoogle;
