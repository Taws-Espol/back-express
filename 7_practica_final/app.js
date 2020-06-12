const express =  require("express");

const app = express();
// morgan = require("morgan");
//const producto = require("./routes/productos");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.use(express.static('public'));
//app.use(morgan("tiny"));

app.get("/", (req,res) =>{
    res.send("Hola mundo desde Express");
});


//Vamos a organizar las rutas en otro modulo.





const port = process.env.PORT || 3000;
app.listen(port, (req, res) =>{
    console.log(`Escuchando en el puerto ${port}`)
});



