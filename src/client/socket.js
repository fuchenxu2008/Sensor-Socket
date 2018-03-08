import socketIOClient from 'socket.io-client';

import {
    IO_CONNECT,
    IO_DISCONNECT,
    IO_NEWDATA,
} from '../shared/config';

const socket = socketIOClient(window.location.host);

/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const setUpSocket = () => {
    socket.on(IO_CONNECT, () => {
        console.log('[socket.io-client] Connected.');
    });

    socket.on(IO_NEWDATA, (serverMessage) => {
        console.log(`[socket.io-client] New Data: ${serverMessage}`);
    });

    socket.on(IO_DISCONNECT, () => {
        console.log('[socket.io-client] Disconnected.');
    });
};
/* eslint-enable no-console */

export default setUpSocket;
