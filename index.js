import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

const AppContainer = () => {
    return (
        <Provider>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppContainer);
