const express = require("express");
const app = express();
const socket = require("socket.io");
const cors = require("cors");
const { getCurrentUser, userDisconnect, joinUser } = require("./userFunc/userFuncs");

app.use(express());

const port = 8000;

app.use(cors());

let server = app.listen(
  port,
  console.log(
    `Server is running on PORT: ${(port)} `
      .green
  )
);

const io = socket(server);

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, roomname }) => {
    const user = joinUser(socket.id, username, roomname);
    console.log(socket.id, "=id",username,roomname);
    socket.join(user.room);

    socket.emit("message", {
      userId: user.id,
      username: user.username,
      text: `Welcome`,
    });

    socket.broadcast.to(user.room).emit("message", {
      userId: user.id,
      username: user.username,
      text: `A User has joined the chat`,
    });
  });

  socket.on("chat", (text) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit("message", {
      userId: user.id,
      username: user.username,
      text: text,
    });
  });

  socket.on("disconnect", () => {
    const user = userDisconnect(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        userId: user.id,
        username: user.username,
        text: `${user.username} has left the chat`,
      });
    }
  });
});