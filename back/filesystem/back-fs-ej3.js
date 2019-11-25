/*3. Crear un programa que cree un archivo con nombre igual al que reciba como primer parámetro, 
y contenido igual al que reciba como segundo parámetro.*/

var fs = require ('fs')

var archivo = (process.argv[2])
var contenido = (process.argv[3])

fs.writeFileSync(archivo, contenido)