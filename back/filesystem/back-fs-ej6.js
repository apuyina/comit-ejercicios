//6. Crear un programa que lea un archivo, la ruta la obtendrá por parámetro, y muestre su contenido en consola.

var fs = require ('fs')

var ruta= process.argv[2]

var mostrar = fs.readFileSync(ruta)
console.log(mostrar)