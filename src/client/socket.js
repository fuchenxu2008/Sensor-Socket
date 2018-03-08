import socketIOClient from 'socket.io-client';

import {
    IO_CONNECT,
    IO_DISCONNECT,
    IO_NEWDATA,
} from '../shared/config';

import { logData } from './actions/sensor';

export const socket = socketIOClient(window.location.host);

/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
export const setUpSocket = (store) => {
    socket.on(IO_CONNECT, () => {
        console.log('[socket.io-client] Connected.');
    });

    socket.on(IO_NEWDATA, (serverMessage) => {
        store.dispatch(logData(serverMessage));
        // this.props.logData(serverMessage);
        // /* eslint-disable no-console */
        // console.log(`[socket.io-client] New Data: ${serverMessage}`);
    });

    socket.on(IO_DISCONNECT, () => {
        console.log('[socket.io-client] Disconnected.');
    });
};

