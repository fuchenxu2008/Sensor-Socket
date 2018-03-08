import { combineReducers } from 'redux';
import sensorReducer from './sensor';

const rootReducer = combineReducers({
    sensorData: sensorReducer,
});

export default rootReducer;
