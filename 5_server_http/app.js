
const http = require("http");
const server = http.createServer();
let puerto = 3000;
server.on("connection", (puerto) => {
    console.log("Nueva conexion!");
});

server.listen(puerto);

console.log(`Servidor escuchando en el puerto ${puerto}`)