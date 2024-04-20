import {
  feathers
} from '@feathersjs/feathers'
import express from '@feathersjs/express'
import socketio from '@feathersjs/socketio';
import {
  connectDB
} from './db.js';
import Noti from './models/Noti.js'

connectDB()

const app = express(feathers())
const port = 5000;

let onlineUsers = []

const addNewUser = (username, rol, socketId) => {
  !onlineUsers.some((user) => user.username === username && user.rol === rol) &&
    onlineUsers.push({
      username,
      rol,
      socketId
    })
}

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter(user => user.socketId !== socketId)
}

const getUser = (username, rol) => {
  return onlineUsers.find(user => user.username === username && user.rol === rol)
}//No esta en funcionamiento pero la deje por si sirve a futuro

// Maneja las conexiones de Socket.io
app.configure(

  socketio({
      cors: {
        origin: 'http://localhost:3000',
      }
    },
    (io) => {
      io.on("connection", (socket) => {

        console.log("Se conecto alguien");

        socket.on("disconnect", () => {
          console.log("Se desconecto alguien");
          removeUser(socket.id)
        })

      })
    }
  )

)

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
})

/*
 * socket.on("sendNotification", ({ senderName, receiverName, receiverRol, text }) => {
          const receiver = getUser(receiverName, receiverRol);
          if (receiver && receiver.socketId) {
            io.to(receiver.socketId).emit("getNotification", {
              senderName,
              text
            });
          } else {
            console.error("Receiver or receiver.socketId is undefined.");
          }
        })
 * 
*/