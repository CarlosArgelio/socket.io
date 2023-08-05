const express = require('express');
const app = express();
const port = 8080;
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));


io.on('connection', function(socket) {
    console.log('New connection');
    socket.emit('message', 'Welcome to the chat');
});

setInterval(function() {
    io.emit('message', 'Hello world, i am writen each 3 seconds!');
}, 3000);

server.listen(port, function() {
    console.log(`Server init in http://localhost:${port}`);
});