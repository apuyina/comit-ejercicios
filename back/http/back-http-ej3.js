/*    Crear un programa que inicialice un servidor en el puerto 3000, el mismo debe responder
 ante el endpoint /emoji con un emoji aleatorio en un JSON de esta forma { "emoji": "💣" }.
 Para este ejercicio van a recibir una pequeña ayuda, la función para obtener un emoji aleatorio es la siguiente:*/


function obtenerEmoji(indice) {
    var emojis = ["😀", "😳", "😄", "😁", "😆", "😅", "😂", "😴", "🤭", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "🤤", "😙", "😚", "😋", "😛", "😝", "😜", "😎", "🤓", "🥳", "🤯", "😡", "😱", "🥺", "😏"]
    if (!indice) {
        var random = Math.floor(Math.random() * 33)
        return emojis[random]
    }
    return emojis[indice]
}


var http = require("http")

var servidor = http.createServer(function(consulta,res) {
	if (consulta.url === "/emoji") {
		res.setHeader('Content-Type', 'application/JSON')
		var emoji = obtenerEmoji()
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