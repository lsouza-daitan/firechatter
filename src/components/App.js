import React from 'react';
import Auth from '../model/auth';
import AuthScreen from '../screens/AuthScreen';
import MainScreen from '../screens/MainScreen';
import AuthRequiredError from '../errors/AuthRequiredError';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Screen: AuthScreen,
        };

        this.onAuthChanged = this.onAuthChanged.bind(this);
        this.onAuthError = this.onAuthError.bind(this);
    }

    render() {
        const { Screen } = this.state;
        return <Screen />;
    }

    componentDidMount() {
        this.unsubscribeAuth = Auth.onAuthStateChanged(
            this.onAuthChanged,
            this.onAuthError,
        );
    }

    componentDidCatch(error, info) {
        switch (true) {
            case error instanceof AuthRequiredError:
                this.loadScreen(AuthScreen, { error });
                break;
        
            default:
                console.error();
                break;
        }
    }

    loadScreen(Screen, state = {}) {
        const newState = Object.assign({}, state, { Screen });
        this.setState(newState);
    }

    onAuthChanged(user) {
        if (user) {
            this.loadScreen(MainScreen);
        } else {
            this.loadScreen(AuthScreen);
        }
    }

    onAuthError(error) {
        this.loadScreen(AuthScreen, { error });
    }
}

export default App;
