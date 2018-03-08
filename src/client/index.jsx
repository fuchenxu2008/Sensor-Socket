import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { setUpSocket } from './socket';

import App from './App';
import { APP_CONTAINER_SELECTOR } from '../shared/config';
import configureStore from './configureStore';

const store = configureStore();

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

if (!(rootEl instanceof Element)) {
    throw new Error('invalid type');
}

const wrapApp = (AppComponent, reduxStore) => (
    <Provider store={reduxStore}>
        <BrowserRouter>
            <AppContainer>
                <AppComponent />
            </AppContainer>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(wrapApp(App, store), rootEl);

if (module.hot) {
    module.hot.accept('./App', () => {
        // eslint-disable-next-line global-require
        const NextApp = require('./App').default;
        ReactDOM.render(wrapApp(NextApp, store), rootEl);
    });
}

setUpSocket(store);
