const express =  require("express");
const Joi = require("joi");
const app = express();

//app.use(express.json());
//app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

let productos = [
                {id: 1, nombre:"Producto 1", precio: 15.0},
                {id: 2, nombre:"Producto 3", precio: 5.3},
                {id: 3, nombre:"Producto 4", precio: 1.5}
];

// Crear un metodo get a la ruta raiz
// Crear un metodo get a la dirección 
// Crear un metodo get llamado "get_producto", que reciba como parametro
// el id del producto( id_producto )



/** 
app.post("/api/producto", (req, res)=>{
    
});
*/

const port = process.env.PORT || 3000;
app.listen(port, (req, res) =>{
    console.log(`Escuchando en el puerto ${port}`)
});



