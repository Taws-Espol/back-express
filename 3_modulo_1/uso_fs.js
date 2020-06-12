
// Importe la libreria fs

let data = [{
    nombre:"Robert",
    appellido: "Moreno"
}, 
{
    nombre: "Alejandro",
    apellido: "Vargas"

}];
/*
fs.writeFile(Nombre archivo, contenido, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
**/

 let crear_archivo = (nombre_archivo, contenido) => {

    return new Promise((resolve, reject) => {
        fs.writeFile(nombre_archivo, contenido, (err) => {
            if (err) {
                reject(err);
            }
            else{
                resolve(nombre_archivo)
            }                
          });
    });
}

/*
module.exports = {
    crear_archivo
}
**/
