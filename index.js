import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/redux/reducers/countReducer'

const store = createStore(reducer)

const AppContainer = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppContainer);
