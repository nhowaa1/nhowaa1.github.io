const net = require('net');

const port = process.argv[2]; 

const server = net.createServer((socket) => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Zero-filled
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}\n`;

    socket.end(formattedTime); 
});

server.listen(port);
