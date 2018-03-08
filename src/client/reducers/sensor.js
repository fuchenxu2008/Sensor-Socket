// import Immutable from 'immutable';

import { IO_NEWDATA } from '../../shared/config';

const initialState = {
    data: [],
};

const sensorReducer = (state = initialState, action) => {
    switch (action.type) {
    case IO_NEWDATA:
        /* eslint-disable no-console */
        console.log(`State: ${state.data}`);
        console.log(`[socket.io-client] New Data: ${action.payload}`);
        return { ...state, data: state.data.concat(action.payload) };
    default:
        return state;
    }
};

export default sensorReducer;
