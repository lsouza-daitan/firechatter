import React from 'react';
import ReactDOM from 'react-dom';
import { setApp } from './appSingleton';
import App from './components/App';

import './styles/reset.css';
import './styles/main.css';

const rootContainer = document.querySelector("#root");
const rootElement = <App />;
const appRef = ReactDOM.render(rootElement, rootContainer);
setApp(appRef);
