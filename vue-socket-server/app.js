const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hola Mundo: Socket.io");
});

io.on("Connection", (socket) => {
  console.log("Nuevo usuario conectado");
  
  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  socket.on("message", (count) => {
    console.log("Mensaje: " + count);
    io.sockets.emit("MSG", count + 1);
  });
});

http.listen(port, () => {
  console.log("Listening on port " + port);
});

module.exports = app;
