/*Crear un programa que lea el archivo index.hmtl y muestre su contenido en consola,
 pero esta vez, reemplazando @titulo@ por el
 título que esté en el archivo "config.json", y así con las otras variables del html.*/

var fs = require ('fs')
var config = require('./config.json')

var contenido = fs.readFileSync('index.html', 'utf-8')

var titulo = "<head><title>@titulo@</title></head>"
var nuevoTitulo = titulo.replace("@titulo@",config.titulo)
var titulo = "<body><h1>@titulo@</h1></body>"
var nuevoTitulo2 = titulo.replace("@titulo@",config.titulo)
var subtitulo = "<body><h2>@subtitulo@</h2></body>"
var nuevoSubtitulo = subtitulo.replace("@subtitulo@", config.subtitulo)
var descripcion = "<body><p>@descripcion@</p></body>"
var nuevaDescripcion = descripcion.replace("@descripcion@", config.descripcion)

var nuevu = fs.writeFileSync("nuevoindex.html",`<html lang="utf-8">
${nuevoTitulo}
${nuevoTitulo2}
${nuevoSubtitulo}
${nuevaDescripcion}
</html>
`
)
var mostrar = fs.readFileSync("nuevoindex.html", 'utf-8'
)
/*
contenido = contenido.replace("@titulo@", config.titulo);
contenido = contenido.replace("@subtitulo@", config.subtitulo);
contenido = contenido.replace("@descripcion@", config.descripcion);
*/

console.log(mostrar)