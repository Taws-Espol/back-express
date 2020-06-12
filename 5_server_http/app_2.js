
const http = require("http");
let puerto = 3000;

const server = http.createServer( (req,res) => {
    if(req.url ==="./"){
        res.write("hola Mundo");
        res.end();
    }
});

server.on("connection", (puerto) => {
    console.log("Nueva conexion!");
});

server.listen(puerto);

console.log(`Servidor escuchando en el puerto ${puerto}`)