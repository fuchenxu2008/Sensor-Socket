from socketIO_client_nexus import SocketIO
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

IO_GOTDATA = 'IO_GOTDATA'

socketIO = SocketIO('localhost', 8000)
# socketIO = SocketIO('https://sensor.kyrie.top',verify=False)
for i in range(0, 100):
    socketIO.emit(IO_GOTDATA, {
        'temperature': 40,
        "humidity": 20,
        "time": "2018-03-01 19:34:32"
    })
    socketIO.wait(seconds=1)
