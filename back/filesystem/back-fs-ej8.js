/*8. Crear un programa que lea el archivo index.hmtl y muestre su contenido en consola,
 pero esta vez, reemplazando @titulo@ por el
 título que esté en el archivo "config.json", y así con las otras variables del html.*/

var fs = require ('fs')
var config = require('./config.json')

var contenido = fs.readFileSync('index.html', 'utf-8')

contenido = contenido.replace("@titulo@", config.titulo);
contenido = contenido.replace("@subtitulo@", config.subtitulo);
contenido = contenido.replace("@descripcion@", config.descripcion);

var mostrar = fs.readFileSync("index.html", 'utf-8')

console.log(mostrar)