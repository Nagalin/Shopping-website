"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
function setUpSocket(server) {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ['get', 'post'],
            credentials: false
        }
    });
    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
        socket.on('test', (msg) => {
            console.log(msg);
        });
    });
}
exports.default = setUpSocket;
