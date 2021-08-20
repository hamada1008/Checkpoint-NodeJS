const net = require('net');
const date =  new Date()
const month = 1 + date.getMonth()
const sdate = `${date.getFullYear()}-${month < 10? "0"+month : month}-${date.getDate() < 10? "0"+date.getDate() : date.getDate()} ${date.getHours()}:${date.getMinutes() < 10? "0"+date.getMinutes():date.getMinutes()}`

const server = net.createServer((socket) => {socket.write(sdate + "\n")
socket.end()


})
server.on('error', (err) => {
    throw err;
  });
server.listen(Number(process.argv[2]))