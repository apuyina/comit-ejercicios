//1. Crear un programa que muestre los archivos y directorios donde está contenido.

var fs = require ('fs')

var directorios = fs.readdirSync('.')
console.log(directorios)