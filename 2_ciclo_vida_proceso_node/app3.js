
console.log("\t Inicio del programa");

setTimeout( function() {
    console.log("\t Primer timeout en el codigo")
} , 4000);


setTimeout( function () {
    console.log("\t Segundo timeout en el codigo ")
}, 0)

setTimeout( function () {
    console.log("\t Tercer timeout en el codigo ")
}, 0)


console.log("\t Fin de programa")

