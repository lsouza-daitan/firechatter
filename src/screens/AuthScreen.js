import React from 'react';
import LoginGoogle from '../components/LoginGoogle';

const AuthScreen = (props) => (
    <div id="auth-screen" className="modal">
        <h1>PrestServ</h1>
        <LoginGoogle />
        <div className="column-group">
            <div className="column f1">
                <h2>Novo aqui?</h2>
                <p></p>
            </div>
            <div className="vsep" />
            <div className="column f1">
                <h2>Já cadastrado? Entre!</h2>
            </div>
        </div>
    </div>
);

export default AuthScreen;
