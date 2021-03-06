import {
    IO_CONNECT,
    IO_DISCONNECT,
    IO_NEWDATA,
    IO_GOTDATA,
} from '../shared/config';

/* eslint-disable no-console */
const setUpSocket = (io) => {
    io.on(IO_CONNECT, (socket) => {
        console.log('[socket.io] A client connected.');

        socket.on(IO_GOTDATA, (clientMessage) => {
            io.emit(IO_NEWDATA, clientMessage);
            console.log(`[socket.io] New Data: ${clientMessage}`);
        });

        socket.on(IO_DISCONNECT, () => {
            console.log('[socket.io] A client disconnected.');
        });
    });
};

export default setUpSocket;
