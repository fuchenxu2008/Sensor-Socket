import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';
import { isProd } from '../shared/util';


// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const configureStore = () => createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, reduxPromiseMiddleware())),
);

export default configureStore;
