import {
    io
} from "socket.io-client";
import {
    feathers
} from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'

export const socketInit = io('http://localhost:5000')
const app = feathers()

// Set up Socket.io client with the socket
app.configure(socketio(socketInit))