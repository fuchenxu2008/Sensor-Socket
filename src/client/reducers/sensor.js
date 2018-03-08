import Immutable from 'immutable';

// import {
// } from '../actions/hello';

const initialState = Immutable.fromJS({
    sensorData: '0',
});

const sensorReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'sensor':
        return state;
    default:
        return state;
    }
};

export default sensorReducer;
