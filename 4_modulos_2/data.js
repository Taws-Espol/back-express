

url = "un url";
function get_data(mensaje){
    //envia un HTTP request
    console.log("\t" + mensaje)
}

//exportando una funcion con alias data
module.exports.data = get_data;

/** 
 * Otra forma de exportar
module.exports = {
    get_data
}
*/