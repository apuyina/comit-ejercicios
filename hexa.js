/*Crear un programa que obtenga 2 colores hexadecimal por parámetro. 
Y que genere una hoja de estilos css.
La misma va a ser resultado de leer el archivo estilos-template.css
 y de reemplazar los textoss @primario@  y @secundario@  por los colores
hexadecimales que haya recibido por parámetros.
La hoja de estilos será creada con nombre estilos-generados.css*/

var fs = require ('fs')
var color1 = process.argv[2]
var color2 = process.argv[3]

var template = fs.readFileSync('./estilos-template.css', 'utf-8')

template = template.replace(/@primario@/g, color1)
template = template.replace(/@secundario@/g, color2)

fs.writeFileSync('estilos-generados.css',template)