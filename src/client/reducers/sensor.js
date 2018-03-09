// import Immutable from 'immutable';

import { IO_NEWDATA } from '../../shared/config';

const initialState = {
    dataSet: [],
};

const sensorReducer = (state = initialState, action) => {
    switch (action.type) {
    case IO_NEWDATA:
        /* eslint-disable no-console */
        // console.log(`State: ${state.data}`);
        // console.log(`[socket.io-client] New Data: ${action.payload}`);
        return {
            ...state,
            dataSet: state.dataSet.concat({
                temperature: action.payload.temperature,
                humidity: action.payload.humidity,
                time: action.payload.time,
            }),
        };
    default:
        return state;
    }
};

export default sensorReducer;
