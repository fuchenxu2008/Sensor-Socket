from socketIO_client_nexus import SocketIO

IO_NEWDATA = 'IO_NEWDATA'

socketIO = SocketIO('localhost', 8000)
for i in range(0, 100):
    socketIO.emit(IO_NEWDATA, i)
    socketIO.wait(seconds=1)
