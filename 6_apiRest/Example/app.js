const express =  require("express");


const app = express();


app.get("/", (req,res) =>{
    res.send("Hola mundo desde Express");
});
/**
app.get("/api/usuarios", (req, res)=>
{
    res.send([{
        nombre: "Robert Moreno",
        username: "rodemore"
    }]);
});

//enviar parámetros a traves de rutas
app.get("/api/usuarios/:username", (req, res) =>{
    console.log(`\t ${req.params.username}`);
});

 */
const port = process.env.PORT || 3000;
app.listen(port, (req, res) =>{
    console.log(`Escuchando en el puerto ${port}`)
});


