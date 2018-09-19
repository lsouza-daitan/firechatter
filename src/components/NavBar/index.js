import React from 'react';
import Button from '../Button';
import Greeting from '../Greeting';
import TaskBar from '../TaskBar';
import Auth from '../../model/auth';
import './style.css';

class NavBar extends React.Component {
    onClickExit() {
        Auth.signOut();
    }

    render() {
        return (
            <nav id='nav-bar'>
                <div className='nav-bar__top'>
                    <Greeting />
                </div>
                <div className='nav-bar__middle'>
                    <Button icon='assignment'>
                        Chamados
                    </Button>
                    <TaskBar />
                </div>
                <div className='nav-bar__bottom'>
                    <Button icon='star'>
                        Ranking
                    </Button>
                    <Button icon='help_outline'>
                        Ajuda
                    </Button>
                    <Button
                        className='danger'
                        icon='power_settings_new'
                        onClick={this.onClickExit}
                    >
                        Sair
                    </Button>
                </div>
            </nav>
        )
    }
}

export default NavBar;
