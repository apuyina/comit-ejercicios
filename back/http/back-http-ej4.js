/*Parámetros

    Como el ejercicio anterior, pero ahora el endpoint recibe un parámetro opcional indice, si este parámetro está definido, se le pasa el índice a la función emoji, de esa forma devuelve el emoji del índice indicado, sino, sigue funcionando como antes.
*/

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

	if (objetoUrl.pathname === "/emoji") {
        res.setHeader('Content-Type', 'application/JSON')
		var emoji = obtenerEmoji(indice)
		var emojson = {
			"emoji" : (emoji)
		}
		res.end(JSON.stringify(emojson));
		console.log(emojson)
	} else {
		res.statusCode = 404
		res.end(`Recurso no existente`)
	}
})

servidor.listen(3000)