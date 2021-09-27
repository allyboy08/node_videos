const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(function (req, res) {
    res.end('welcome to node');
});

server.listen(port, hostname, () => {
    console.log(`server running at ${hostname}:${port}`);
});