/*Headers

Llegado este punto, recomiendo que se descarguen postman para poder probar sus servidores de una forma más rápida que usando node-fetch.

    Siguiendo con el ejercicio anterior, ahora queremos que según el header que nos
    llegue de la conexión llamado accept, el cual puede ser text/plain, text/html
    o application/json, responder con el formato adecuado y agregando como header
    de respuesta 'Content-Type': 'text/plain', poniendo el tipo de contenido adecuado.
    Las respuestas podrán ser las siguientes:

    '{"emoji": "[emoji aleatorio]"}' para application/json.
    '[emoji aleatorio]' para text/plain.
    '<h1 style="text-align:center;">[emoji aleatorio]</h1>' para text/html.

Si no se especifica el header accept, se deberá responder con application/json.*/

function obtenerEmoji(indice) {
    var emojis = ["😀", "😳", "😄", "😁", "😆", "😅", "😂", "😴", "🤭", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "🤤", "😙", "😚", "😋", "😛", "😝", "😜", "😎", "🤓", "🥳", "🤯", "😡", "😱", "🥺", "😏"]
    if (!indice) {
        var random = Math.floor(Math.random() * 33)
        return emojis[random]
    }
    return emojis[indice]
}


var http = require("http")
var url = require('url')

var servidor = http.createServer(function(consulta,res) {
    var objetoUrl = url.parse(consulta.url)
    var busqueda = new url.URLSearchParams(objetoUrl.query)
    var indice = busqueda.get("indice") /*BUSQUEDA DE PARAMETROS*/

    if (objetoUrl.pathname === '/emoji' && consulta.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
		var emoji = obtenerEmoji(indice)
		var emojson = {"emoji": (emoji)}
		res.end(JSON.stringify(emojson));
	} else if (objetoUrl.pathname === '/emoji' && consulta. === 'GET'){

    } else {
		res.statusCode = 404
		res.end(`Recurso no existente`)
	}
})

servidor.listen(3000)