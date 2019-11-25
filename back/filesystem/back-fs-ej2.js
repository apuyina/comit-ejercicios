//2. Crear un programa que cree una carpeta con nombre igual al que reciba por parámetros.

var fs = require('fs')

var nombreCarpeta = (process.argv[2])
fs.mkdirSync(nombreCarpeta)