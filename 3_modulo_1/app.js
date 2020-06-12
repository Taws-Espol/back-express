

// importar la función creada en uso_fs.js


let data = [{
    nombre:"Robert",
    appellido: "Moreno"
}, 
{
    nombre: "Alejandro",
    apellido: "Vargas"

}];

let nombre_archivo = "./files/personas_promesa.json"
let contenido = JSON.stringify(data);
//llamada a la promesa
crear_archivo(nombre_archivo,contenido)
.then(archivo => console.log(`Archivo creado:${archivo}`))
