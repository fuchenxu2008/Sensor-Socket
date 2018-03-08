from socketIO_client_nexus import SocketIO
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

IO_GOTDATA = 'IO_GOTDATA'

socketIO = SocketIO('localhost', 8000)
for i in range(0, 100):
    socketIO.emit(IO_GOTDATA, i)
    socketIO.wait(seconds=1)
