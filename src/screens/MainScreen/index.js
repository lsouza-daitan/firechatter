import React from 'react';
import AuthBarrier from '../../components/AuthBarrier';
import NavBar from '../../components/NavBar';
import Chat from '../../components/Chat';
import './style.css';

const MainScreen = (props) => (
    <AuthBarrier>
        <div id="main-screen">
            <NavBar />
            <div className='main-screen__content'>
                <Chat roomId="1" />
            </div>
        </div>
    </AuthBarrier>
);

export default MainScreen;
