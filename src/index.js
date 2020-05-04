import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { AppStateProvider } from './AppContext';

ReactDOM.render(
    <AppStateProvider>
        <App />
    </AppStateProvider>, 
    document.getElementById('root')
);
